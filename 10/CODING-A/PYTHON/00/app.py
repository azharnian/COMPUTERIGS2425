from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Hello, world!</h1>"

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/me")
def me():
    return jsonify({"name" : "budi", "age": 100}), 200

@app.route("/notfound")
def notfound():
    return jsonify({"status" : "error"}), 404

app.run(debug=True)