import React from 'react';
import FriendCard from './FriendCard';

const FriendList = (props) => {
  return(
    <div>
      {props.friends.map(el => <FriendCard friend={el}/>)}
    </div>
  )
}

export default FriendList