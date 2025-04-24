import requests

BASE_URL = "http://127.0.0.1:5000/players"

def get_all_players():
    response = requests.get(BASE_URL)
    print("Status:", response.status_code)
    print("Data:", response.json())

def get_player_by_id(player_id):
    response = requests.get(f"{BASE_URL}/{player_id}")
    print("Status:", response.status_code)
    print("Data:", response.json())

def create_player():
    payload = {
        "name": "John Doe",
        "age": 25,
        "games_played": 10,
        "highest_score": 1200,
        "current_score": 300
    }
    response = requests.post(BASE_URL, json=payload)
    print("Status:", response.status_code)
    print("Data:", response.json())

def update_player(player_id):
    payload = {
        "current_score": 450
    }
    response = requests.patch(f"{BASE_URL}/{player_id}", json=payload)
    print("Status:", response.status_code)
    print("Data:", response.json())

def delete_player(player_id):
    response = requests.delete(f"{BASE_URL}/{player_id}")
    print("Status:", response.status_code)
    print("Data:", response.json())


if __name__ == "__main__":
    # create_player()
    get_all_players()
    # get_player_by_id(1)
    # update_player(1)
    # delete_player(1)
