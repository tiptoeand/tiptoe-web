import React, { Component } from 'react';
import proj1_1 from '../image/proj1_1.jpg';
import proj1_2 from '../image/proj1_2.jpg';
import proj1_3 from '../image/proj1_3.jpg';
import proj1_4 from '../image/proj1_4.jpg';
import proj1_5 from '../image/proj1_5.jpg';
import proj1_6 from '../image/proj1_6.jpg';
import proj1_7 from '../image/proj1_7.jpg';
import './project1.css';
import Gallery from 'react-photo-gallery';
const photos1 = [
  {
    src: proj1_1,
    width: 4,
    height: 4
  },
  {
    src: proj1_2,
    width: 3,
    height: 5
  },
  {
    src: proj1_3,
    width: 2,
    height: 3
  },
]
const photos2 = [
  {
    src: proj1_4,
    width: 2,
    height: 3
  },
  {
    src: proj1_5,
    width: 2,
    height: 2
  },
  {
    src: proj1_6,
    width: 4,
    height: 5
  },
  {
    src: proj1_7,
    width: 3,
    height: 2
  },

]


class Project1 extends Component {
  state = {
    name: 'PROJECT1',
  }

  render() {
    return (
      <div class="project1page">
        <div class="inclusiontext"><h2>PROJECT_01: UNSPOKEN VIOLENCE</h2></div>
        <div class="inclusiontext"><p>In 2017, TIPTOE& partnered with Greeen Tree Youth Violence Prevention Foundation, a leading NGO which prevents school violence in South Korea. Our partnership directed Korean public's attention to <strong>Project_01: Unspoken Violence</strong> through which we donated to provide medical treatment to a victim of school violence.</p></div>
        <div class="photogallery">
          <Gallery photos={photos1} />
          <Gallery photos={photos2} />
        </div>
      </div>
    );
  }
}

export default Project1;
