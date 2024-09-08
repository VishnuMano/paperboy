# Firebase Imports
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Google News API Imports
from serpapi import GoogleSearch
from dotenv import load_dotenv
import os

# Webscrape Imports
import requests
from newspaper import Article

# Summarization Imports
from transformers import pipeline

load_dotenv()

# Webscrape Function
def fetch_article(p_url):
    article = Article(p_url)
    article.download()
    article.parse()
    return article.text

# Get subscribers from firebase
cred = credentials.Certificate('./paper-2e35c-firebase-adminsdk-td9jq-ad4655cb3d.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

subscribers_ref = db.collection('subscribers')

# For each subscriber,
docs = subscribers_ref.stream()
for doc in docs:
    firstName = doc.to_dict()['fname']
    email = doc.to_dict()['email']
    city = doc.to_dict()['city']
    state = doc.to_dict()['state']
    
    # Access 5 articles from subscriber location (serpapi)
    api_key = os.getenv('NEWS_API_KEY')

    params = {
        "api_key": api_key,
        "engine": "google_news",
        "gl": "us",
        "q": f"{city}, {state}"
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    completion_counter = 0
    results_index = 0
    print(firstName + "_______________")
    while(completion_counter < 5):
        headlines = []
        stories = []
        links = []
        querystring = {"url":results["news_results"][results_index]["link"],"lang":"en","engine":"2"}
        headline = results["news_results"][results_index]["title"]
        response = requests.get(querystring["url"])
        results_index += 1
        if response.status_code == 200:
            # Webscrape articles (newspaper, bs4, selenium)
            article_content = fetch_article(querystring["url"])
            # Summarize Articles (summarize pipeline hugging face)
            summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=0)
            summary = summarizer(article_content, min_length=50, max_length=100)
            headlines.append(headline)
            stories.append(summary[0]['summary_text'])
            links.append(querystring["url"])
            completion_counter += 1
        print(headline)