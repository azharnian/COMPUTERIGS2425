import FriendCard from "../FriendCard";

export default function FriendList({ friends, onSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <FriendCard
          friend={friend}
          key={index}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}