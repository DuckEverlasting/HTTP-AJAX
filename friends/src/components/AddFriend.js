import React from "react";
import styled from "styled-components";

const ButtonSC = styled.button`
  background: #87b5ff;
  padding: 5px 10px;
  border-radius: 5px;
`;
const InputButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "none" : "inline-block")};
`;

const UpdateButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "inline-block" : "none")};
  background: #84ff92;
`;

const CancelUpdateButtonSC = styled(ButtonSC)`
  display: ${props => (props.updateTog ? "inline-block" : "none")};
  background: #ffa58e;
`;

const AddFriend = props => {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={props.input.name}
        onChange={props.inputHandler}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={props.input.age}
        onChange={props.inputHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={props.input.email}
        onChange={props.inputHandler}
      />
      <InputButtonSC
        updateTog={props.updateTog}
        onClick={props.postFriend}
      >
        Submit New Friend
      </InputButtonSC>
      <UpdateButtonSC
        updateTog={props.updateTog}
        onClick={props.updateFriend}
      >
        Update Friend
      </UpdateButtonSC>
      <CancelUpdateButtonSC
        updateTog={props.updateTog}
        onClick={props.cancelUpdate}
      >
        Cancel Update
      </CancelUpdateButtonSC>
    </div>
  );
};

export default AddFriend;
