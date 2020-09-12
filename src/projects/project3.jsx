import React, { Component } from 'react';
import proj3_0 from '../image/proj3_0.jpg';
import proj3_1 from '../image/proj3_1.jpg';
import proj3_2 from '../image/proj3_2.jpg';
import proj3_3 from '../image/proj3_3.jpg';
import proj3_4 from '../image/proj3_4.jpg';
import proj3_5 from '../image/proj3_5.jpg';
import proj3_6 from '../image/proj3_6.jpg';
import proj3_7 from '../image/proj3_7.jpg';
import proj3_8 from '../image/proj3_8.jpg';
import proj3_9 from '../image/proj3_9.jpg';
import './project3.css';
import Gallery from 'react-photo-gallery';
const photos1 = [
  {
    src: proj3_7,
    width: 5,
    height: 3
  },

  {
    src: proj3_8,
    width: 5,
    height: 4
  },


  {
    src: proj3_6,
    width: 3,
    height: 3
  }
]
const photos2 = [

  {
    src: proj3_2,
    width: 5,
    height: 4
  },
  {
    src: proj3_9,
    width: 2,
    height: 4
  },
  {
    src: proj3_4,
    width: 6,
    height: 4
  },
  {
    src: proj3_3,
    width: 5,
    height: 3
  }

]


class Project3 extends Component {
  state = {
    name: 'PROJECT3',
  }

  render() {
    return (
      <div class="project2page">
        <div class="inclusiontext"><h2>PROJECT_03: EVERY PIECE FITS TOGETHER</h2></div>
        <div class="inclusiontext"><p>In efforts to reinforce and raise awareness about conventions and re-shape perspectives against the disabled. TIPTOE& is carrying out our third project: <strong>Project_03: Every Piece Fits Together</strong>.</p></div>
        <div class="photogallery">
          <Gallery photos={photos1} />
          <Gallery photos={photos2} />
        </div>
      </div>
    );
  }
}

export default Project3;
