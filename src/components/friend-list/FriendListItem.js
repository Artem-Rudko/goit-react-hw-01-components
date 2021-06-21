import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../default-avatar.svg';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
    </li>
);

FriendListItem.defaultProps = {
    avatar: defaultAvatar,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;