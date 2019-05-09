import React from "react";
import styled from "styled-components";
import FriendCard from "./FriendCard";

const FriendListSC = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px auto 0;
  max-width: 1200px;
`;

const FriendList = props => {
  return (
    <FriendListSC>
      {props.friends.map(el => (
        <FriendCard
          key={el.id}
          friend={el}
          editButton={props.editButton}
          deleteButton={props.deleteButton}
          deletePrimed={props.deletePrimed}
        />
      ))}
    </FriendListSC>
  );
};

export default FriendList;
