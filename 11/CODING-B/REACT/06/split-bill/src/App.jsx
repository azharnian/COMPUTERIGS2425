import { useState, useEffect } from "react";
import friendsJSON from "./friends.json";
import FriendList from "./components/FriendList";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [friends, setFriends] = useState(() => {
    const storedFriends = localStorage.getItem("friends");
    return storedFriends ? JSON.parse(storedFriends) : friendsJSON;
  });
  
  const [selectedFriend, setSelectedFriend] = useState(null);

  function onSelectedFriend(friend) {
    setSelectedFriend( selectedFriend =>
      selectedFriend?.id === friend.id ? null : friend
    );
    console.log(friend);
  }

  // Save into local-storage
  useEffect(()=>{

    localStorage.setItem("friends", JSON.stringify(friends));
    console.log("friends saved..");

  }, [friends])

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
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

        {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
        )}

      </div>
    </>
  )
}

export default App
