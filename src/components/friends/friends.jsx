import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendItem/friendListItem'
import css from "components/friends/friends.module.css"

export const Friends = ({ allFrends }) => {
    return <ul className={css.friendList}>
        {allFrends.map(eachFriend => { 
                return <FriendListItem key={eachFriend.id} friend={eachFriend} /> })}
    </ul>
}



Friends.propTypes = {
    allFrends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};