import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenTopic: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const title = event.target.getAttribute('title');
    title === this.state.currentOpenTopic
      ? this.setState({ currentOpenTopic: '' })
      : this.setState({ currentOpenTopic: title });
  }

  render() {
    return this.props.data.map(topic => {
      return (
        <div className='container' key={topic.title}>
          <div className='title-accordion' title={topic.title} onClick={this.handleClick}>{topic.title}</div>
          <div className={topic.title === this.state.currentOpenTopic ? 'title-body' : 'title-body hidden'}>{topic.body}</div>
        </div>
      );
    });
  }
}
export default Accordion;
