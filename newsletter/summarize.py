import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

title = "Warming up each day through Thursday, will reach near 90°"
webscraped_content = "WEST MICHIGAN — The forecast from FOX 17 Meteorologist Reece Cole: Overnight lows reached the lower 40s, and upper 30s for some. That's the coolest we've seen this late Summer as we transition back to mid-Summer weather this week. Sunday will still feel a touch like fall, but it won't be quite as cool as Saturday, with highs near 70 degrees. After Sunday, highs will spike back up into the 80s, even upper 80s possible at times from Wednesday through Friday. We have a chance at 90° Thursday! Thankfully, this will be a dry heat and humidity will remain lower than the last heat wave. It will be a quiet, dry stretch of weather though, as rain chances stay at or near zero through Saturday. Stay tuned to FOX 17 for your latest weather updates.TODAY: Mostly sunny to partly cloudy, breezy, and still a bit cool. Highs in near 70.TONIGHT: A few clouds and cool. Lows in the mid 40s. North wind at 5 to 15 mph.MONDAY: Sunny and pleasant. Highs in the upper 70s.TUESDAY: Mostly sunny. Light wind. Highs in the low 80s.WEDNESDAY: Sunny skies. Highs in the middle 80s.For the latest details on the weather in West Michigan, head to the FOX 17 Weather page.Follow FOX 17: Facebook - X (formerly Twitter) - Instagram - YouTube"

response = model.generate_content(["I have webscraped the following news article. I need you to summarize the contents of the article, in under 250 words. Don't make up any false information or make assumptions that are not explicitly stated in the article as accuracy is the most important part of summarization. Also, since this is webscraped content, only summarize the part of the webscraped article that seems like it is a part of the article (since ads and highlights of other articles are captured through my webscraping script. Also, I am providing the title of the article with the webscraped content, so only summarize parts of the webscraped content that seem to be related with the title. Here is the title: ", title, "Here is the webscraped article content: ", webscraped_content])

content = response.candidates[0].content  # Assuming you're using the first candidate
text = content.parts[0].text  # Assuming there's only one part with text
print(text)