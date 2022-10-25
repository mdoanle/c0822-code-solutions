import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeCounter: 0,
      isTicking: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    const { isTicking } = this.state;
    if (!isTicking) {
      this.setState({ isTicking: true });
      this.timer = setInterval(this.tick, 1000);
    } else if (isTicking) {
      this.setState({ isTicking: false });
      clearInterval(this.timer);
    }
  }

  tick() {
    const { timeCounter } = this.state;
    this.setState({ timeCounter: timeCounter + 1 });
  }

  reset() {
    const { isTicking } = this.state;
    if (!isTicking) {
      this.setState({ timeCounter: 0 });
    }
  }

  render() {
    return (
      <div id='container'>
        <div onClick={!this.state.isTicking ? this.reset : this.handleClick } className='stopwatch'>
          <span className='counter'>{this.state.timeCounter}</span>
        </div>
        <i onClick={this.handleClick} className={this.state.isTicking ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
      </div>
    );
  }
}
export default StopWatch;
