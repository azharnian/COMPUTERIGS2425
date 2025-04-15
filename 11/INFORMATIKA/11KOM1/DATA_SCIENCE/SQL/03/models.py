from run import db

class Player(db.Model):
    __tablename__ = "players"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    games_played = db.Column(db.Integer, default=0)
    highest_score = db.Column(db.Integer, default=0)
    current_score = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "games_played": self.games_played,
            "highest_score": self.highest_score,
            "current_score": self.current_score,
        }

    def __repr__(self):
        return f"Player : {self.name}"
