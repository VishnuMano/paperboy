import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from serpapi import GoogleSearch
from dotenv import load_dotenv
import os
import json
import requests

headers = {
	"x-rapidapi-key": "5f6deedd2bmsh23d2143520e93e9p14dd63jsnbbc5f79ad818",
	"x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com"
}

# Load environment variables from .env file
load_dotenv()

cred = credentials.Certificate('./paper-2e35c-firebase-adminsdk-td9jq-ad4655cb3d.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Get reference to collection
subscribers_ref = db.collection('subscribers')

# Iterate through documents in collection
docs = subscribers_ref.stream()
for doc in docs:
    # Access your API key
    api_key = os.getenv('NEWS_API_KEY')

    city = doc.to_dict()['city']
    state = doc.to_dict()['state']

    params = {
        "api_key": api_key,
        "engine": "google_news",
        "gl": "us",
        "q": f"{city}, {state}"
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    url = "https://article-extractor-and-summarizer.p.rapidapi.com/summarize"
    print(doc.to_dict()['fname'])
    completionCounter = 0
    articleAccessedCounter = 0
    while(completionCounter < 5):
        querystring = {"url":results["news_results"][articleAccessedCounter]["link"],"lang":"en","engine":"2"}
        articleAccessedCounter += 1
        response = requests.get(url, headers=headers, params=querystring)
        json_summary = response.json()
        if('error' in json_summary):
            continue
        else:
            completionCounter += 1
            print(json_summary)
            print("\n")
    