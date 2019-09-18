import React, { Component } from 'react';

export default class LeftArrow extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="backArrow" onClick={this.props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}
