import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequirements = this.handleRequirements.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        password: ''
      }
    );
  }

  handleRequirements(event) {
    let errorMessage;
    this.state.password === ''
      ? errorMessage = 'Password Required!'
      : errorMessage = 'Password is too short!';
    return errorMessage;
  }

  render() {
    return (
        <form>
          <label className='label-time' htmlFor='password'>
            Password
           </label>
          <input
          type='password'
          onChange={this.handlePasswordChange}
          onSubmit={this.handleSubmit}
          required
          id='password'
          />
        <i className={this.state.password.length < 8 ? 'fa-solid fa-xmark' : 'fa-solid fa-check'}></i>
          <div className='user-message'>{this.state.password.length < 8 ? this.handleRequirements() : ''}</div>
        </form>
    );
  }
}

export default ValidatedInput;

// var string = 'quan is a chad'
// var quanRegExp = /quan/
// quanRegExp.test(string)
