import "./friendList.css";
import FriendCard from "../FriendCard";

export default function FriendListCard({ friends, selectedFriend}) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <FriendCard
          friend={friend}
          key={index}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}