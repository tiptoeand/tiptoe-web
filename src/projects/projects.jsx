import React, { Component } from 'react';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import ProjectPageImage from '../image/projectpage.jpg';
import './projects.css';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  state = {
    name: 'PROJECTS',
  }

  render() {
    return (
      <div className="projectpage">
        <NavbarDesktop />
        <NavbarMobile />
        < div class="imageText">
          <img src={ProjectPageImage} class="mainImage" alt="" />
        </div>
        <Project3 />
        <Project2 />
        <Project1 />

        <Footer />
      </div >

    );
  }
}

export default Projects;