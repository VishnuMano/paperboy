from newspaper import Article

def scrape(url):
    article = Article(url)
    article.download()
    article.parse()
    return article.text

print(scrape("https://www.fox17online.com/weather/todays-forecast/todays-forecast-sunnier-near-70"))