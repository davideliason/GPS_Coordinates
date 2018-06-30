import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Person(props) {
  return <p> Person: {props.user} + lat: {props.latitude}</p>
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <Person user={user.username} latitude={user.latitude} />
        )}
      </div>
    );
  }
}
export default App;
