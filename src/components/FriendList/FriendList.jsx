import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '../../data/friends.json';
import './friendlist.scss';

export const FriendList = () => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem key={friend.id} {...friend} />
            ))} 
        </ul>
    )
}