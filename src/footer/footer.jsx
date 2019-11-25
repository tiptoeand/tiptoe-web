import React, { Component } from 'react';
import './footer.css'
import fblogo from './image/fb-big.svg'
import emaillogo from './image/email-big.svg'
import instalogo from './image/insta-big.svg'
import partnerlogo from './image/partner-big.svg'

export default class Footer extends Component {
  state = {
    name: 'FOOTER',
  }
  render() {
    const { name } = this.state;
    return (
      <div class="footer">
        <div class="Rectangle"></div>
        <a href="https://www.tiptoeand.com/"><img src={partnerlogo} alt="tiptoe& website" /></a>
        <a href="https://www.facebook.com/tiptoeand/"><img src={fblogo} alt="tiptoe& facebook" /></a>
        <a href="https://www.instagram.com/tiptoeand_/"><img src={instalogo} alt="tiptoe& instagram" /></a>
        <a href="mailto: tiptoeand.cornell@gmail.com"><img src={emaillogo} alt="tiptoe& email" /></a>
        <p>&copy;TIPTOE& 2019</p>
      </div>

    )
  }
}

