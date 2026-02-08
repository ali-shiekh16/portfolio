import os
import argparse
from agent import create_agent

def main():
    parser = argparse.ArgumentParser(description="Blog Drafting Agent")
    parser.add_argument("topic", type=str, help="The topic or notes for the blog post")
    parser.add_argument("--out-dir", type=str, default="../src/features/blog/content", help="Output directory for the .mdx file")
    
    args = parser.parse_args()
    
    # Initialize the agent
    agent = create_agent()
    
    # Run the agent
    print(f"--- Starting Agent for topic: {args.topic} ---")
    final_state = agent.invoke({
        "topic": args.topic,
        "revision_count": 0
    })
    
    # Save the output
    draft = final_state.get("draft")
    slug = final_state.get("slug")
    
    if draft and slug:
        out_path = os.path.join(os.path.abspath(args.out_dir), f"{slug}.mdx")
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(draft)
        
        print(f"\n✅ Blog post saved to: {out_path}")
    else:
        print("\n❌ Failed to generate blog post.")

if __name__ == "__main__":
    main()
