import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <span>Username</span>
      <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
      <span>Password</span>
      <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
      <button type='submit'>Sign In</button>
    </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <RegistrationForm/>;
root.render(element);
