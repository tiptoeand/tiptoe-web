import React from "react";
import Gallery from "react-photo-gallery";
import proj3_2 from "../image/proj3_2.jpg";
import proj3_3 from "../image/proj3_3.jpg";
import proj3_4 from "../image/proj3_4.jpg";
import proj3_6 from "../image/proj3_6.jpg";
import proj3_7 from "../image/proj3_7.jpg";
import proj3_8 from "../image/proj3_8.jpg";
import proj3_9 from "../image/proj3_9.jpg";
import "./projects.css";

const photos1 = [
  {
    src: proj3_7,
    width: 5,
    height: 3,
  },

  {
    src: proj3_8,
    width: 5,
    height: 4,
  },

  {
    src: proj3_6,
    width: 3,
    height: 3,
  },
];
const photos2 = [
  {
    src: proj3_2,
    width: 5,
    height: 4,
  },
  {
    src: proj3_9,
    width: 2,
    height: 4,
  },
  {
    src: proj3_4,
    width: 6,
    height: 4,
  },
  {
    src: proj3_3,
    width: 5,
    height: 3,
  },
];

function Project3() {
  return (
    <div className="projectsection">
      <div className="inclusiontext">
        <h4 className="headingtext">
          <strong>PROJECT_03: EVERY PIECE FITS TOGETHER </strong>
        </h4>
      </div>
      <div className="inclusiontext">
        <p>
          In efforts to reinforce and raise awareness about conventions and
          re-shape perspectives against the disabled. TIPTOE& is carrying out
          our third project:{" "}
          <strong>Project_03: Every Piece Fits Together</strong>.
        </p>
      </div>
      <div className="photogallery">
        <Gallery photos={photos1} />
        <Gallery photos={photos2} />
      </div>
    </div>
  );
}
export { Project3 };
