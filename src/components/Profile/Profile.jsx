import styles from './Profile.module.css';

const Profile = (props) => {
  const { username, tag, location, avatar, followers, views, likes } = props;

  return (
    <div className={styles.card}>
      <div>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.username}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span>Followers</span>
          <span className={styles.value}>{followers}</span>
        </li>
        <li className={`${styles.stat} ${styles.center}`}>
          <span>Views</span>
          <span className={styles.value}>{views}</span>
        </li>
        <li className={styles.stat}>
          <span>Likes</span>
          <span className={styles.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
