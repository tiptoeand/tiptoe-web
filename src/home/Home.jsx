import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';

import './Home.css';


class Home extends Component {
    state = {
        name: 'HOME',
    }

    render() {
        const { name } = this.state;
        return (
            <div className="App">
              <Navbar/>
                <div class = "nav">
                    <div class = "navButton">
                        <a href = "" class = "navAbout">ABOUT</a>
                        <a href = "" class = "navProjects">PROJECTS</a>
                        <a href = "" class = "navKor">한국어</a>
                        <a href = "" class = "navShop">SHOP</a>
                        <img src={"./image/tiptoe&.png"}/>
                    </div>
                </div>

                <div class = "imageText">
                    <img src = "image/MainImage.jpeg" class = "mainImage"/>
                    <h1 class = "mainImageText2">spring ‘19 new release</h1>
                    <h1 class = "mainImageText1">spring ‘19 new release</h1>
                </div>

                <div class = "tiptoeName">
                    <img src="./image/tiptoe&.png" class = "nameLogo" />
                    <hr class = "line"></hr>
                </div>

                <p class = "p3launch">P_3 LAUNCH</p>

                <img src = "image/Timeline.png" class = "timelineImg" alt="Timeline Image"/>
                <img src = "image/3image.png" class = "image3"/>
                <img src = "image/3steps.png" class = "stepsImg"/>

                <div class = "join">
                    <div class = "joinEmail">
                        <p class = "joinEmailText">Join the TIPTOE&</p>
                        <div class = "emailRect"></div>
                        <button class="joinButton">JOIN</button>
                    </div>
                    <p class = "joinEmailText2">Get updates on our current projects.</p>
                    <p class = "joinEmailText3">By clicking join, I accept the Privacy Policy and Terms of Use. You may unsubscribe at any time.</p>
                </div>

                <p class = "tiptoe">TIPTOE& 2019</p>


            </div>


        );
    }
}

export default Home;
