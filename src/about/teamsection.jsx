import React from "react";
import team_mobile from "../image/team_mobile.jpg";
import team_desktop from "../image/team_desktop.jpg";
import member_photo from "../image/team_member_temp.jpg";
import "./teamcontent.css";

function TeamContent() {
  return (
    <div className="container-fluid justify-content-center text-center intext">
      <p className="titleText pt-2">Inclusive Community</p>
      <p className="descriptionText">
        At TIPTOE&, we believe that diversity fosters creativity and
        accerlerates innovation. We value the unique backgrounds and experiences
        eveeryone brings, and want all who join us to realize their full
        potential. Because different perspectives can fuel the best ideas, we
        are committed to a workplace that is increasingly diverse and inclusive.
      </p>

      <img
        src={team_desktop}
        alt="teams info"
        className="teamcontentimagedesktop"
      />
      <img
        src={team_mobile}
        alt="teams info"
        className="teamcontentimagemobile"
      />
      {/* 
      <div class="teams">
        <div class="teamsection">
          <h2>LEADERS</h2>
        </div>
        <div class="gallery">
          <img src={member_photo} alt="member1" />
          <div class="desc1">
            HAYAN LEE
            <br />
            President
          </div>
        </div>
        <div class="gallery">
          <img src={member_photo} alt="member2" />
          <div class="desc1">
            MINJAE KIM
            <br />
            Design Director
          </div>
        </div>
        <div class="gallery">
          <img src={member_photo} alt="member3" />
          <div class="desc1">
            HAYAN LEE
            <br />
            Marketing Director
          </div>
        </div>
        <div class="gallery">
          <img src={member_photo} alt="member4" />
          <div class="desc1">
            MINJAE KIM
            <br />
            Operations Director
          </div>
        </div>
        <div class="gallery">
          <img src={member_photo} alt="member5" />
          <div class="desc1">
            MINJAE KIM
            <br />
            Business Dev Director
          </div>
        </div>
      </div> */}
    </div>
  );
}
export { TeamContent };
