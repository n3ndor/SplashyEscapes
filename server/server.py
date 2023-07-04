from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)


users = [
    {"name": "John", "age": 30},
    {"name": "Sara", "age": 25}
]


@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)


@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True, port=5000)