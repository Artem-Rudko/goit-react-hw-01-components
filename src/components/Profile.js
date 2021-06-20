import React from 'react';


function Profile ({ name, tag, location, avatar, stats }) {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.defaultProps = {
    tag: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
};

export default Profile;