import React, { Component } from 'react';

export default class RightArrow extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="nextArrow" onClick={this.props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}
