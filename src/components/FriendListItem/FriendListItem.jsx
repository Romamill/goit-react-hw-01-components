import './friendlistitem.scss';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '5px',
  };

  return (
    <li className="friendlist-item">
      <span className="status" style={statusStyle}></span>
      <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};







