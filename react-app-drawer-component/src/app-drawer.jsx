import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    if (!isOpen) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div onClick={this.handleClick} className={isOpen ? 'container' : ''}>
        <i onClick={this.handleClick} className={!isOpen ? 'fa-solid fa-bars' : 'hidden'}></i>
        <div className={isOpen ? 'drawer' : 'hidden'}>
          <ul>
            <li className='menu'>Menu</li>
            <li onClick={this.handleClick}>About</li>
            <li onClick={this.handleClick}>Get Started</li>
            <li onClick={this.handleClick}>Sign In</li>
            <li onClick={this.handleClick}>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
