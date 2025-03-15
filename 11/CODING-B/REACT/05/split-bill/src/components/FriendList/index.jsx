import FriendCard from "../FriendCard";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <FriendCard
          friend={friend}
          key={index}
        />
      ))}
    </ul>
  );
}