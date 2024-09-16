import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

# Initialize Firebase Admin SDK
cred = credentials.Certificate("./paper-2e35c-firebase-adminsdk-td9jq-58eee9bceb.json")
firebase_admin.initialize_app(cred)

# Firestore instance
db = firestore.client()

def run_scheduled_task(request):
    # This function will be triggered at 8:00 AM every day
    now = datetime.now()
    print(f"Scheduled task ran at: {now}")

    # Example Firestore write operation
    doc_ref = db.collection(u'scheduled_tasks').add({
        u'timestamp': firestore.SERVER_TIMESTAMP,
        u'message': f"Task executed at {now}"
    })

    return "Scheduled task completed successfully", 200
