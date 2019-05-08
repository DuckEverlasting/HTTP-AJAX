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
      updateTog: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/1")
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
    const update = this.checkUpdate(input);
    if (update) {
      this.setState({updateTog: true})
      alert(
        'Someone with that name already exists in our database.\nClick "Update Friend" to update their information or "Cancel Update" to return.'
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
    const update = this.checkUpdate(input);
    if (!update) {
      alert("Name not found. Did you change it?")
      return;
    }
    axios
    .put("http://localhost:5000/friends", input)
    .then(res => this.setState({ input: { name: "", age: "", email: "" }, updateTog: false }))
    .then(this.getFriends)
    .catch(err => {
      console.log(err);
    });
  }

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

  checkUpdate(input) {
    return this.state.friends.some(el => el.name === input.name)
  }

  cancelUpdate = ev => {
    ev.preventDefault();
    this.setState({
      updateTog: false
    })
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <AddFriend
          input={this.state.input}
          inputHandler={this.inputHandler}
          postFriend={this.postFriend}
          updateTog={this.state.updateTog}
        />
      </div>
    );
  }
}

export default App;
