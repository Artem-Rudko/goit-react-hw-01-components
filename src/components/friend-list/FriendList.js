import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
    </ul>
)

export default FriendList;