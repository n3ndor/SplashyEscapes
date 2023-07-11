from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)

app.secret_key = "secret, secret, what is a secret?"