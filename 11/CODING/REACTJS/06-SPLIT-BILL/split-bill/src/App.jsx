import { useState } from "react";
import friendsList from "./friends.json"

import FriendListCard from "./components/FriendListCard";

function App() {
  const [friends, setFriends] = useState(friendsList);

  return (
    <>
     <div className="app">
      <div className="sidebar">
        <FriendListCard
          friends={friends}
        />
      </div>
    </div>
    </>
  )
}

export default App
