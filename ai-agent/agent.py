import os
import re
from typing import TypedDict, Annotated, Sequence
from datetime import datetime
from langgraph.graph import StateGraph, END
from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage
from llm_factory import get_llm

class AgentState(TypedDict):
    topic: str
    draft: str
    critique: str
    revision_count: int
    slug: str

def slugify(text: str) -> str:
    """Convert text to a URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    return re.sub(r'[-\s]+', '-', text).strip('-')

def clean_content(content: str) -> str:
    """Strips conversational prefixes from the LLM output."""
    # Find the start of YAML frontmatter
    match = re.search(r'---', content)
    if match:
        return content[match.start():].strip()
    return content.strip()

def draft_node(state: AgentState):
    """Generates the initial draft of the blog post."""
    llm = get_llm()
    
    prompt = f"""
    Act as a Senior Software Engineer and Technical Blogger.
    Write a high-quality technical blog post about: {state['topic']}
    
    Requirements:
    - Use GitHub-flavored Markdown.
    - Include YAML frontmatter:
      ---
      title: "Generated Title"
      date: "{datetime.now().strftime('%Y-%m-%d')}"
      excerpt: "A 2-sentence SEO summary"
      tags: ["Next.js", "AI", "Tutorial"]
      ---
    - Use clear headings, code blocks, and structure.
    - Avoid generic AI phrasing (e.g., "In the ever-evolving landscape...").
    - Focus on Next.js App Router best practices, Server Components, and modern data-fetching.
    
    IMPORTANT: Output ONLY the Markdown content starting with the YAML frontmatter and nothing else.
    """
    
    response = llm.invoke([HumanMessage(content=prompt)])
    content = clean_content(response.content)
    
    # Extract title for slug if not present
    title_match = re.search(r'title:\s*"(.*)"', content)
    title = title_match.group(1) if title_match else state['topic']
    slug = slugify(title)
    
    print(f"--- Draft Generated: {title} ---")
    
    return {
        "draft": content,
        "slug": slug,
        "revision_count": state.get("revision_count", 0)
    }

def critique_node(state: AgentState):
    """Critiques the blog draft for technical accuracy and best practices."""
    llm = get_llm()
    
    prompt = f"""
    Act as a Technical Editor and Senior Next.js Specialist.
    Review the following blog post draft:
    
    {state['draft']}
    
    Check for:
    1. Technical accuracy of code snippets.
    2. Modern Next.js App Router best practices (Server Components, "use client", data-fetching).
    3. Basic SEO quality (keywords in excerpt and headings).
    
    Output:
    - If the draft is excellent and requires no changes, output exactly: PASSED
    - Otherwise, provide a concise bulleted list of concrete issues to fix.
    """
    
    response = llm.invoke([HumanMessage(content=prompt)])
    critique = response.content.strip()
    
    print(f"--- Critique Node ---\n{critique}\n-------------------")
    
    return {"critique": critique}

def revision_node(state: AgentState):
    """Revises the draft based on the critique."""
    llm = get_llm()
    
    prompt = f"""
    Act as a Senior Software Engineer.
    Revise the following blog draft based on the feedback provided.
    
    Original Draft:
    {state['draft']}
    
    Critique:
    {state['critique']}
    
    Requirements:
    - Re-generate the entire blog post with the fixes applied.
    - Maintain the same YAML frontmatter structure.
    - Output ONLY the Markdown content starting with the YAML frontmatter. Do not include any conversational text like "Here is the revised post".
    """
    
    response = llm.invoke([HumanMessage(content=prompt)])
    content = clean_content(response.content)
    
    print(f"--- Revision Node (Cycle {state['revision_count'] + 1}) ---")
    
    return {
        "draft": content,
        "revision_count": state['revision_count'] + 1
    }

def should_continue(state: AgentState):
    """Determines whether to continue to revision or end the process."""
    if state['critique'].strip().upper() == "PASSED":
        return END
    if state['revision_count'] >= 3:
        print("--- Max revisions reached. Stopping. ---")
        return END
    return "revision"

def create_agent():
    """Compiles the LangGraph state machine."""
    workflow = StateGraph(AgentState)
    
    workflow.add_node("draft", draft_node)
    workflow.add_node("critique", critique_node)
    workflow.add_node("revision", revision_node)
    
    workflow.set_entry_point("draft")
    
    workflow.add_edge("draft", "critique")
    workflow.add_conditional_edges(
        "critique",
        should_continue,
        {
            "revision": "revision",
            END: END
        }
    )
    workflow.add_edge("revision", "critique")
    
    return workflow.compile()
