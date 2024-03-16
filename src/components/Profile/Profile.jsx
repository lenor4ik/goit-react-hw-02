import css from '../Profile/Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCart}>
  <div className={css.profileIntoCart}>
<img className={css.imageCart} src={image} alt="User Avatar" />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileInfo}>{tag}</p>
    <p className={css.profileInfo}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.projectListItem}>
      <span className={css.listItemName}>Followers</span>
    <span className={css.listItemNamber}>{stats.followers}</span>
    </li>
    <li className={css.projectListItem}>
      <span className={css.listItemName}>Views</span>
    <span className={css.listItemNamber}>{stats.views}</span>
    </li>
    <li className={css.projectListItem}>
      <span className={css.listItemName}>Likes</span>
      <span className={css.listItemNamber}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

export default Profile
