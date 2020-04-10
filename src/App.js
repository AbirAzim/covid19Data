import React, { Component } from 'react';
import SignupForm from './components/signup/SignupForm';
import 'bootstrap/dist/css/bootstrap.css';
import Covid19 from './components/Coved19';
import SingleCountry from './components/SingleCountry';

class App extends Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    return (
      <React.Fragment>
        <Covid19 />
        <SingleCountry />
      </React.Fragment>
    );
  }
}

export default App;
