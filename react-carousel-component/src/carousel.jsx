import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handleClickRight() {
    clearInterval(this.state.intervalId);
    const currentSlide = this.state.currentSlide;
    if (this.state.currentSlide < this.props.drakeImages.length - 1) {
      this.setState({
        currentSlide: currentSlide + 1
      });
    } else {
      this.setState({
        currentSlide: 0
      });
    }
    this.slideTimer();
  }

  handleClickLeft() {
    clearInterval(this.state.intervalId);
    const currentSlide = this.state.currentSlide;
    if (currentSlide > 0) {
      this.setState({
        currentSlide: currentSlide - 1
      });
    } else {
      this.setState({
        currentSlide: this.props.drakeImages.length - 1
      });
    }
    this.slideTimer();
  }

  renderDots() {
    return (
      this.props.drakeImages.map((value, index) => {
        const dotClass = index === this.state.currentSlide ? 'solid' : 'regular';
        return <i key={index} className={`fa-${dotClass} fa-circle`} index={index} onClick={this.handleDotClick}></i>;
      })
    );
  }

  handleDotClick(event) {
    const index = event.target.getAttribute('index');
    clearInterval(this.state.intervalId);
    this.setState({
      currentSlide: Number(index)
    });
    this.slideTimer();
  }

  slideTimer() {
    const intervalId = setInterval(this.handleClickRight, 3000);
    this.setState({
      intervalId
    });
  }

  componentDidMount() {
    this.slideTimer();
  }

  render() {
    const drakeImages = this.props.drakeImages;
    const currentSlide = this.state.currentSlide;
    return (
      <div className='container'>
        <div className='carousel-container'>
          <i onClick = {this.handleClickLeft} className="fa-solid fa-chevron-left"></i>
          <img src={drakeImages[currentSlide]}></img>
          <i onClick = {this.handleClickRight} className="fa-solid fa-chevron-right"></i>
        </div>
        <div className='dot-container'>
          {this.renderDots()}
        </div>
      </div>
    );
  }
}

export default Carousel;
