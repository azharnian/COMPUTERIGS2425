from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import Player

# curl -X GET http://127.0.0.1:5000/players
@app.route("/players", methods=["GET"])
def get_players():
    players = Player.query.all()
    return jsonify([p.to_dict() for p in players]), 200


# curl -X GET http://127.0.0.1:5000/players/1
@app.route("/players/<int:player_id>", methods=["GET"])
def get_player(player_id):
    player = Player.query.get(player_id)
    if player:
        return jsonify(player.to_dict())
    return jsonify({"status" : "not found"}), 404

"""
curl -X POST http://127.0.0.1:5000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 25, "games_played": 10, "highest_score": 1200, "current_score": 300}'

"""
@app.route("/players", methods=["POST"])
def create_player():
    data = request.json
    player = Player(
        name=data["name"],
        age=data["age"],
        games_played=data.get("games_played", 0),
        highest_score=data.get("highest_score", 0),
        current_score=data.get("current_score", 0),
    )
    db.session.add(player)
    db.session.commit()
    return jsonify(player.to_dict()), 201

"""
curl -X PATCH http://127.0.0.1:5000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"current_score": 450}'
"""
@app.route("/players/<int:player_id>", methods=["PATCH"])
def update_player(player_id):
    player = Player.query.get(player_id)
    if player:
        data = request.json
        for field in ["name", "age", "games_played", "highest_score", "current_score"]:
            if field in data:
                setattr(player, field, data[field])
        db.session.commit()
        return jsonify(player.to_dict()), 200
    return jsonify({"status" : "failed to update"}), 404


# curl -X DELETE http://127.0.0.1:5000/players/1
@app.route("/players/<int:player_id>", methods=["DELETE"])
def delete_player(player_id):
    player = Player.query.get(player_id)
    if player:
        db.session.delete(player)
        db.session.commit()
        return jsonify({"message": "Player deleted"}), 200
    return jsonify({"status" : "failed to delete"}), 404



if __name__ == "__main__":
    app.run(debug=True)