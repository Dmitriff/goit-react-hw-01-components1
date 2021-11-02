import PropTypes from 'prop-types';
import s from './FriendList.module.css'

function FriendList({friends}) {
 
    return (
        <ul className={s.friend_list}>
            {friends.map((prop) => {
                const { id, avatar, name, isOnline } = prop;
                return (
                     <li className={s.item} key={id}>
                      <span className={isOnline ? (s.online):(s.offline)}></span>  
                      <img className={s.avatar} srs={avatar} alt={name} width="48"/>
                        <p className={s.name}>{name}</p>
                 </li>  
                )})}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
export default FriendList;