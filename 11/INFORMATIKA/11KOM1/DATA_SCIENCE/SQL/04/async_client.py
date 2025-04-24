import aiohttp
import asyncio

BASE_URL = "http://127.0.0.1:5000/players"

async def get_all_players():
    async with aiohttp.ClientSession() as session:
        async with session.get(BASE_URL) as resp:
            print("Status:", resp.status)
            data = await resp.json()
            print("Data:", data)

async def get_player_by_id(player_id):
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{BASE_URL}/{player_id}") as resp:
            print("Status:", resp.status)
            data = await resp.json()
            print("Data:", data)

async def create_player():
    payload = {
        "name": "John Doe",
        "age": 25,
        "games_played": 10,
        "highest_score": 1200,
        "current_score": 300
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(BASE_URL, json=payload) as resp:
            print("Status:", resp.status)
            data = await resp.json()
            print("Data:", data)

async def update_player(player_id):
    payload = {
        "current_score": 450
    }
    async with aiohttp.ClientSession() as session:
        async with session.patch(f"{BASE_URL}/{player_id}", json=payload) as resp:
            print("Status:", resp.status)
            data = await resp.json()
            print("Data:", data)

async def delete_player(player_id):
    async with aiohttp.ClientSession() as session:
        async with session.delete(f"{BASE_URL}/{player_id}") as resp:
            print("Status:", resp.status)
            data = await resp.json()
            print("Data:", data)

async def main():
    # await create_player()
    await get_all_players()
    await get_player_by_id(1)
    # await update_player(1)
    # await delete_player(1)

if __name__ == "__main__":
    asyncio.run(main())
