import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../sharedStyles";

const FormSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  max-width: 500px;
  margin: 0 auto;
  border: 1px outset rgb(200, 200, 200);
  border-radius: 5px;
  overflow: hidden;
`

const TitleSC = styled.h1`
  font-family: ${fonts.title};
  font-weight: bold;
  font-size: 2.2rem;
  letter-spacing: .05rem;
  background: ${colors.green};
  align-self: stretch;
  color: white;
  margin: 0 0 20px;
  padding: 10px;
`

const InputBoxSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

const InputSC = styled.input`
  font-family: ${fonts.handwriting};
  font-size: 14px;
  width: 100%;
  padding: 3px;
  margin: 5px 0;
  outline-color: ${colors.green};
    &::selection{
      background: ${colors.lightGreen};
      color: white;
    }
`

const ButtonBoxSC = styled.div`
  margin: 10px 0;
`

const ButtonSC = styled.button`
  font-family: ${fonts.title};
  font-weight: bold;
  letter-spacing: .05rem;
  font-size: 16px;
  background: ${colors.green};
  color: white;
  padding: 5px 10px;
  margin: 10px;
  border-color: ${colors.green};
  border-radius: 5px;
  user-select: none;
  outline: none;

    &:active {
      background: ${colors.darkGreen};
      border-color: ${colors.darkGreen};
    }
`;
const InputButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "none" : "inline-block")};
`;

const UpdateButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "inline-block" : "none")};
`;

const CancelUpdateButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "inline-block" : "none")};
  background: ${colors.red};
  border-color: ${colors.red};

    &:active {
      background: ${colors.darkRed};
      border-color: ${colors.darkRed};
    }
`;

const AddFriend = props => {
  return (
    <FormSC>
      <TitleSC>Edit your FriendList</TitleSC>
      <InputBoxSC spellCheck="false">
        <InputSC
          type="text"
          name="name"
          placeholder="Name"
          value={props.input.name}
          onChange={props.inputHandler}
        />
        <InputSC
          type="number"
          name="age"
          placeholder="Age"
          value={props.input.age}
          onChange={props.inputHandler}
        />
        <InputSC
          type="email"
          name="email"
          placeholder="Email"
          value={props.input.email}
          onChange={props.inputHandler}
        />
      </InputBoxSC>
      <ButtonBoxSC>
        <InputButtonSC
          updateTog={props.updateTog}
          onClick={props.postFriend}
        >
          Submit New Friend
        </InputButtonSC>
        <InputButtonSC
          updateTog={props.updateTog}
          onClick={props.updateTogFunct}
        >
          Update Existing Friend
        </InputButtonSC>
        <UpdateButtonSC
          updateTog={props.updateTog}
          onClick={props.updateFriend}
        >
          Update This Friend
        </UpdateButtonSC>
        <CancelUpdateButtonSC
          updateTog={props.updateTog}
          onClick={props.updateTogFunct}
        >
          Cancel Update
        </CancelUpdateButtonSC>
      </ButtonBoxSC>
    </FormSC>
  );
};

export default AddFriend;
