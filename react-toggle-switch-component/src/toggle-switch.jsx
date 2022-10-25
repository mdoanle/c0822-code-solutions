import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchStatus: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const switchMode = !this.state.switchStatus;
    this.setState({ switchStatus: switchMode });
  }

  render() {
    const { switchStatus } = this.state;
    return (
      <div className='container'>
        <div onClick={this.handleClick} className={switchStatus ? 'switch switch-on' : 'switch'}>
          <span className={switchStatus ? 'slider slider-on' : 'slider'}>
          </span>
        </div>
        <span className='switch-state'>
          {switchStatus ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  }
}

export default ToggleSwitch;
