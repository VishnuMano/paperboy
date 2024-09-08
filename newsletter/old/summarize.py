from transformers import pipeline

# Specify the model and version explicitly
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6", revision="a4f8f3e")

# Your paragraph of web-scraped information
paragraph = """
    
"""

# Summarize the paragraph
summary = summarizer(paragraph, max_length=130, min_length=30, do_sample=False)

print(summary[0]['summary_text'])
