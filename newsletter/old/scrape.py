import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from serpapi import GoogleSearch
from dotenv import load_dotenv
import os
import requests
from bs4 import BeautifulSoup
from transformers import pipeline
from newspaper import Article

def fetch_article(p_url):
    article = Article(p_url)
    article.download()
    article.parse()
    return article.text

headers = {
	"x-rapidapi-key": "5f6deedd2bmsh23d2143520e93e9p14dd63jsnbbc5f79ad818",
	"x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com"
}
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

    print(doc.to_dict()['fname'])
    completionCounter = 0
    articleAccessedCounter = 0
    while(completionCounter < 5):
        querystring = {"url":results["news_results"][articleAccessedCounter]["link"],"lang":"en","engine":"2"}
        response = requests.get(querystring)
        articleAccessedCounter += 1
        if response.status_code == 200:
            webpage_content = response.text
            article_content = fetch_article(querystring)
            summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=0)
            summary = summarizer(article_content, min_length=100, max_length=200)
            print(summary[0]['summary_text'])
            completionCounter += 1
            
# # Step 1: Fetch the webpage
# url = 'https://www.cnn.com/2024/09/04/us/winder-ga-shooting-apalachee-high-school/index.html'
# response = requests.get(url)
# # Step 2: Check if the request was successful
# if response.status_code == 200:
#     webpage_content = response.text
    
#     # Step 3: Parse the HTML content
#     soup = BeautifulSoup(webpage_content, 'html.parser')
    
#     # Step 4: Extract the main article content
#     # Update the selector based on the actual structure of the page
#     article_div = soup.find('div', {'class': 'l-container'})  # Example class name
    
#     if article_div:
#         paragraphs = article_div.find_all('p')
#         article_content = ' '.join([p.get_text() for p in paragraphs])
        
#         # Step 5: Clean the text
#         article_content = article_content.strip()
#     else:
#         print("Article content not found")
#     article_content = fetch_article(url)
#     # Step 6: Summarize the content
#     summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=0)
#     summary = summarizer(article_content, min_length=100, max_length=200)
#     print(summary[0]['summary_text'])
# else:
#     print("Failed to retrieve the webpage")