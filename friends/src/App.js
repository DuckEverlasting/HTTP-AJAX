import React from "react";
import axios from "axios";
import "./App.css";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      input: {
        name: "",
        age: "",
        email: ""
      },
      updateTog: false,
      deletePrimed: 0
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  inputHandler = ev => {
    this.setState({
      input: { ...this.state.input, [ev.target.name]: ev.target.value }
    });
  };

  postFriend = ev => {
    ev.preventDefault();
    const input = this.state.input;
    const error = this.checkComplete(input);
    if (error.length !== 0) {
      alert(error.join("\n"));
      return;
    }
    const update = this.pullFriendData(input.name, "name");
    if (update) {
      this.setState({ updateTog: true });
      alert(
        'Someone with that name already exists in our database.\nClick "Update Friend" to update their information\nor "Cancel Update" to return.'
      );
      return;
    }
    axios
      .post("http://localhost:5000/friends", input)
      .then(res => this.setState({ input: { name: "", age: "", email: "" } }))
      .then(this.getFriends)
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = ev => {
    ev.preventDefault();
    const input = this.state.input;
    const error = this.checkComplete(input);
    if (error.length !== 0) {
      alert(error.join("\n"));
      return;
    }
    const friend = this.pullFriendData(input.name, "name");
    if (!friend) {
      alert("Sorry, our database doesn't contain anybody with that name.");
      return;
    }
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, input)
      .then(res =>
        this.setState({
          input: { name: "", age: "", email: "" },
          updateTog: false
        })
      )
      .then(this.getFriends)
      .catch(err => {
        console.log(err);
      });
  };

  checkComplete(input) {
    const error = [];
    if (input.name === "") {
      error.push("Please enter a name.");
    }
    if (input.age === "") {
      error.push("Please enter an age.");
    }
    if (input.email === "") {
      error.push("Please enter an email address.");
    }
    return error;
  }

  pullFriendData(input, inputType) {
    return this.state.friends.find(el => input === el[inputType]);
  }

  updateTogFunct = ev => {
    ev.preventDefault();
    this.setState({
      input: this.state.updateTog
        ? { name: "", age: "", email: "" }
        : this.state.input,
      updateTog: !this.state.updateTog
    });
  };

  callUpdate = ev => {
    ev.preventDefault();
    const friend = this.pullFriendData(Number(ev.target.id), "id");
    this.setState({
      input: {
        name: friend.name,
        age: friend.age,
        email: friend.email
      },
      updateTog: true
    });
    window.scrollTo(0, 0)
  };

  render() {
    return (
      <div className="App">
        <AddFriend
          input={this.state.input}
          inputHandler={this.inputHandler}
          postFriend={this.postFriend}
          updateFriend={this.updateFriend}
          updateTog={this.state.updateTog}
          updateTogFunct={this.updateTogFunct}
        />
        <FriendList
          friends={this.state.friends}
          editButton={this.callUpdate}
          deleteButton={this.delete}
          deletePrimed={this.state.deletePrimed}
        />
      </div>
    );
  }
}

export default App;
