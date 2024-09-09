import smtplib
import os
from dotenv import load_dotenv
from email.message import EmailMessage

def sendNewsletter(content):
    load_dotenv()
    sender_email = 'reporter@paperboy.fyi'
    receiver_email  = "vishnu.mano@roc.ai"
    smtp_server = 'mail.privateemail.com'
    port = 465
    login = "reporter@paperboy.fyi"
    password = os.getenv("EMAIL_PASSWORD")
    message = EmailMessage()
    message["Subject"] = "Hello World"
    message["From"] = f"Paperboy <{sender_email}>"
    message["To"] = receiver_email
    content = """Test"""
    message.add_alternative(content, subtype='html')
    # message.set_content(content)
    server = smtplib.SMTP_SSL(smtp_server, port)
    server.login(login, password)
    server.send_message(message)
    server.quit()

sendNewsletter("First Official Paperboy Email")