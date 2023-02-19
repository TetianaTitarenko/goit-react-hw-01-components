import css from 'components/friendItem/friendListItem.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {

  return <li className={css.item}>
  <span className={`${css.status} ${isOnline ? `${css.true}` : `${css.false}`}`}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}