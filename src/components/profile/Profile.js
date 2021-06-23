import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../default-avatar.svg';
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.stats__item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.stats__item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.stats__item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.defaultProps = {
    avatar: defaultAvatar,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    // stats: PropTypes.object.isRequired,
    // followers: PropTypes.number.isRequired,
    // views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
};

export default Profile;
