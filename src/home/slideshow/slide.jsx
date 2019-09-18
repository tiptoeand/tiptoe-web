import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      backgroundImage: `url(${'../image/tiptoe.png'})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }

    return <div className="slide" style={styles}></div>
  }
}
