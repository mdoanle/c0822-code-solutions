import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let clicks = this.state.clickCount;
    clicks++;
    this.setState({ clickCount: clicks });
  }

  render() {
    let color;
    const clickCount = this.state.clickCount;
    if (clickCount < 3) {
      color = 'green';
    } else if (clickCount < 6) {
      color = 'purple';
    } else if (clickCount < 9) {
      color = 'violet';
    } else if (clickCount < 12) {
      color = 'pink';
    } else if (clickCount < 15) {
      color = 'orange';
    } else if (clickCount < 18) {
      color = 'yellow';
    } else if (clickCount >= 18) {
      color = 'white';
    }

    return (
      <div className='row'>
        <button onClick={this.handleClick} className={color}> Hot Button </button>
        <div>{this.state.clickCount}</div>
      </div>);
  }

}

export default HotButton;
