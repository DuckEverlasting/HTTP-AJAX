import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../sharedStyles";

const FriendCardSC = styled.div`
  background: white;
  text-align: start;
  margin: 10px;
  width: 300px;
  height: auto;
  border: 1px outset ${colors.lightGrey};
  border-radius: 5px;
  overflow: hidden;
`;

const MiddleBoxSC = styled.div`
  padding: 10px;
  margin: 10px;
  width: 300px;
  height: auto;
`;

const TitleSC = styled.p`
  background: ${colors.green};
  color: white;
  font-family: ${fonts.title};
  letter-spacing: 0.05rem;
  font-weight: bold;
  padding: 8px 20px;
  margin: 0;
  word-wrap: break-word;
`;

const TextSC = styled.p`
  font-family: ${fonts.handwriting};
  padding: 0;
  margin: 0;
  word-wrap: break-word;
`;

const BottomBoxSC = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DeleteConfirmSC = styled.span`
  opacity: ${props => (props.primed ? "1" : "0")};
  font-family: ${fonts.title};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${colors.red};
  padding-right: 5px;
  transition: opacity .3s;
  user-select: none;
`;

const ButtonSC = styled.button`
  font-family: ${fonts.title};
  border: none;
  border-top: 1px solid ${colors.grey};
  border-left: 1px solid ${colors.grey};
  background: ${colors.lighterGrey};
  user-select: none;
  outline: none;
  &:first-of-type {
    border-top-left-radius: 5px;
  }
  &:active {
    background: ${colors.lightGrey};
  }
`;

const DeleteButtonSC = styled(ButtonSC)`
  background: ${props => (props.primed ? colors.red : colors.lighterGrey)};
  color: ${props => (props.primed ? "white" : "black")};
  transition: background .3s, color .3s;
`;

// End Styling

const FriendCard = props => {
  const primedHandler = () => {
    return props.deletePrimed == props.friend.id;
  };

  return (
    <FriendCardSC>
      <TitleSC>{props.friend.name}</TitleSC>
      <MiddleBoxSC>
        <TextSC>Age: {props.friend.age}</TextSC>
        <TextSC>Email: {props.friend.email}</TextSC>
      </MiddleBoxSC>
      <BottomBoxSC>
        <DeleteConfirmSC primed={primedHandler()}>
          Click again to delete
        </DeleteConfirmSC>
        <ButtonSC id={props.friend.id} onClick={props.editButton}>
          edit
        </ButtonSC>
        <DeleteButtonSC
          id={props.friend.id}
          primed={primedHandler()}
          onClick={props.deleteButton}
          onBlur={props.resetDelete}
        >
          delete
        </DeleteButtonSC>
      </BottomBoxSC>
    </FriendCardSC>
  );
};

export default FriendCard;
