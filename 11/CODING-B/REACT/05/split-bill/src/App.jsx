import { useState } from "react";
import friendsJSON from "./friends.json";
import FriendList from "./components/FriendList";

function App() {
  const [friends, setFriends] = useState(friendsJSON);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <>
      <div className="app">
        <div className="sidebar">

          <FriendList
            friends={friends}
          />

        </div>

      </div>
    </>
  )
}

export default App
