import { useState } from "react";
import friendsJSON from "./friends.json";
import FriendList from "./components/FriendList";

function App() {
  const [friends, setFriends] = useState(friendsJSON);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function onSelectedFriend(friend) {
    setSelectedFriend( selectedFriend =>
      selectedFriend?.id === friend.id ? null : friend
    );
    console.log(friend);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">

          <FriendList
            friends={friends}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />

        </div>

      </div>
    </>
  )
}

export default App
