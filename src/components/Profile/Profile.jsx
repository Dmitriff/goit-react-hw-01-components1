import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({avatar, name, tag, location, followers, views, likes}) {
    return (
      

        <div className={s.profile}>
            <div className={s.description}>
                <img scr={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                    width="100px"
                    height="100px"/>
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <ul className={s.stats}>
                <li className={s.item}>
                    <p className={s.label}>Followers</p>
                    <p className={s.quantity}>{followers}</p>
                </li>
                <li className={s.item}>
                    <p className={s.label}>Views</p>
                    <p className={s.quantity}>{views}</p>
                </li>
                <li className={s.item}>
                    <p className={s.label}>Likes</p>
                    <p className={s.quantity}>{likes}</p>
                </li>
            </ul>
        </div>
  )  
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.node
};


export default Profile;