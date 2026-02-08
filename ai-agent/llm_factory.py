import os
from pathlib import Path
from dotenv import load_dotenv
from langchain_groq import ChatGroq

# Look for .env in the current file's directory first, then root
current_dir = Path(__file__).parent
load_dotenv(dotenv_path=current_dir / ".env")
load_dotenv(dotenv_path=current_dir.parent / ".env")

def get_llm():
    """
    Factory function to get the LLM based on environment variables.
    Defaults to Groq if not specified.
    """
    provider = os.getenv("LLM_PROVIDER", "groq").lower()
    model = os.getenv("LLM_MODEL", "llama-3.1-8b-instant")
    
    if provider == "groq":
        api_key = os.getenv("GROQ_API_KEY")
        if not api_key:
            raise ValueError("GROQ_API_KEY not found in environment variables.")
        return ChatGroq(
            model_name=model,
            groq_api_key=api_key,
            temperature=0.7
        )
    else:
        raise ValueError(f"Unsupported LLM provider: {provider}")
