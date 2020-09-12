import React from "react";
import Gallery from "react-photo-gallery";
import proj2_1 from "@/image/proj2_1.jpg";
import proj2_2 from "@/image/proj2_2.jpg";
import proj2_3 from "@/image/proj2_3.jpg";
import proj2_4 from "@/image/proj2_4.jpg";
import proj2_5 from "@/image/proj2_5.jpg";

const photos1 = [
  {
    src: proj2_1,
    width: 3,
    height: 4,
  },
  {
    src: proj2_2,
    width: 2.5,
    height: 4,
  },

  {
    src: proj2_4,
    width: 3,
    height: 4,
  },
];

const photos2 = [
  {
    src: proj2_5,
    width: 5,
    height: 4,
  },
  {
    src: proj2_3,
    width: 5,
    height: 4,
  },
];

function Project2() {
  return (
    <div class="projectsection">
      <div class="inclusiontext">
        <h2>PROJECT_02: NO SILENCE NO VIOLENCE</h2>
      </div>
      <div class="inclusiontext">
        <p>
          Currently, TIPTOE& is organizing{" "}
          <strong>Project_02: No Silence No Violence</strong>, which has sparked
          from the success of Project_01: Unspoken Violence. Our second project
          is an extension of the first project, with a specific emphasis on
          donating 100% of proceeds to Green Tree Youth Violence Prevention
          Foundation. Project_02 aims to bring an end to silence that triggers
          violence in our schools.
        </p>
      </div>
      <div class="photogallery">
        <Gallery photos={photos1} />
        <Gallery photos={photos2} />
      </div>
    </div>
  );
}

export default Project2;
