import FriendListItem from '../FriendList/FriendListItem'
import css from '../FriendList/FriendList.module.css'


const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendsCart}>
      {Array.isArray(friends) &&
        friends.map((friend) => {
          return <FriendListItem key={friend.id} friend={friend } />
  })}
</ul>
  )
}

export default FriendList
