import css from '../FriendList/FriendListItem.module.css'

const FriendListItem  = ({ friend }) => {
  
  return (
  <li className={css.friendCart}>
    <img src={friend.avatar} alt="Avatar" width="48" />
    <p className={css.friendName}>{friend.name}</p>
    <p className={friend.isOnline ? css.online : css.offline}>{friend.isOnline ? 'Online' : 'Offline'}</p>
  </li>
  )
}

export default FriendListItem
