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

# Access your API key
api_key = os.getenv('NEWS_API_KEY')

# city = input("City: ")
city = "Grand Rapids, MI"

params = {
  "api_key": api_key,
  "engine": "google_news",
  "gl": "us",
  "q": city
}

search = GoogleSearch(params)
results = search.get_dict()
# print(type(results["news_results"]))
# with open('data.json', 'w') as file:
#     json.dump(results, file, indent=4)

url = "https://article-extractor-and-summarizer.p.rapidapi.com/summarize"
for i in range(0, 5):
    querystring = {"url":results["news_results"][i]["link"],"lang":"en","engine":"2"}
    response = requests.get(url, headers=headers, params=querystring)
    json_summary = response.json()
    print(json_summary)
    print("\n")