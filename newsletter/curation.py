import os
from dotenv import load_dotenv
from serpapi import GoogleSearch

def getArticles(city, state):
    load_dotenv()

    params = {
        "engine": "google_news",
        "q": f"{city}, {state}",
        "gl": "us",
        "hl": "en",
        "api_key": os.getenv('SERP_API_KEY')
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    news_results = results["news_results"]
    return news_results