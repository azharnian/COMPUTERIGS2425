from flask import Flask, jsonify, request
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route("/")
def index():
    return "It works!"

@app.route("/search")
def search():
    movie = request.args.get("movie")
    if not movie:
        return jsonify({"error" : "movie query is required"}), 400
    
    response = requests.get(f"http://www.omdbapi.com/?s={movie}&apikey={os.environ.get('OMDB_API_KEY')}")
    return jsonify(response.json()), 200

if __name__ == "__main__":
    app.run(
        debug=True,
        port=3000
    )
