from dotenv import load_dotenv

from flask import Flask, render_template, jsonify, request

load_dotenv()
app = Flask("__name__")

users = [
    {
        "name" : "John Doe",
        "age" : 100,
        "died" : True
    },
    {
        "name" : "Jane Doe",
        "age" : 50,
        "died" : False
    }
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/users", methods=["GET", "POST"])
def get_users():

    if request.method == "POST":
        data = request.json
        user = {
            "name" : data["name"],
            "age" : data["age"],
            "died" : data["died"]
        }
        users.append(user)
        return jsonify({ "status":"success", "data":user }), 201

    return jsonify(users), 200

@app.route("/users/<int:id>")
def get_user_by_id(id):
    try:
        user = users[id]
    except:
        return jsonify({"status" : "Not Found"}), 404
    
    return jsonify(user), 200


if __name__ == "__main__":  
    app.run(debug=True)