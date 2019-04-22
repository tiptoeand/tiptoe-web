import React, { Component } from 'react';
import './footer.css'
import fblogo from './image/fb-big.svg'
import emaillogo from './image/email-big.svg'
import instalogo from './image/insta-big.svg'

export default class Footer extends Component {
  state = {
    name: 'FOOTER',
  }
  render() {
    const { name } = this.state;
    return (
      <div class="footer">
        <a href="https://www.facebook.com/tiptoeand/"><img src={fblogo} alt="https://www.facebook.com/tiptoeand/" /></a>
        <img src={emaillogo} alt="tiptoe email link" />
        <a href="https://www.instagram.com/tiptoeand_/"><img src={instalogo} alt="https://www.instagram.com/tiptoeand_/" /></a>
        <p>&copy; TIPTOE& 2019</p>
      </div>
    )
  }
}

