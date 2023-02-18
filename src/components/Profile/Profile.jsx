import css from "components/Profile/Profile.module.css"
import PropTypes from 'prop-types';

export const Profile = ({ user: { username, tag, location, avatar, stats: {followers, views, likes } } }) => {
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.number.isRequired,
    avatar: PropTypes.number.isRequired,
    stats: PropTypes.array
      ({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
};
