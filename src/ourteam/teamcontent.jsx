import React, { Component } from 'react';
import team_mobile from '../image/team_mobile.jpg';
import team_desktop from '../image/team_desktop.jpg';
import member_photo from '../image/team_member_temp.jpg';
import './teamcontent.css';


class TeamContent extends Component {
  state = {
    name: 'TEAMCONTENT',
  }

  render() {
    return (
      <div>
        <div class="inclusiontext"><h2>INCLUSIVE COMMUNITY</h2></div>
        <div class="inclusiontext"><p>At TIPTOE&, we believe that diversity fosters creativity and accerlerates innovation. We value the unique backgrounds and experiences eveeryone brings, and want all who join us to realize their full potential. Because different perspectives can fuel the best ideas, we are committed to a workplace that is increasingly diverse and inclusive.</p></div>
        <div class="membertopimage"><img src={team_desktop} alt="teams info" /></div>
        <div class="membertopimage2"><img src={team_mobile} alt="teams info" /></div>

        <div class="teams">
          <div class="teamsection"><h2>LEADERS</h2></div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">HAYAN LEE<br />President</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MINJAE KIM<br />Design Director</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">HAYAN LEE<br />Marketing Director</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MINJAE KIM<br />Operations Director</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MINJAE KIM<br />Business Dev Director</div>
          </div>
        </div>

        <div class="teams">
          <div class="teamsection"><h2>DESIGN</h2></div>
          <div class="teamsection"><p>Research product ideas and current fashion trends and see how
            to emulate social issues within the designs themselves, brainstorming
            and design. Develop and manage the TIPTOE& website.</p></div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">YUNA SHIN<br />Website Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MICHELLE WANG<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SARAH MIRAE KIM<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">ALLI PARK<br />Fashion Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SERAH KIM<br />Fashion Designer</div>
          </div>
        </div>

        <div class="teams">
          <div class="teamsection"><h2>MARKETING (M&S)</h2></div>
          <div class="teamsection"><p>Research product ideas and current fashion trends and see how
            to emulate social issues within the designs themselves, brainstorming
            and design. Develop and manage the TIPTOE& website.</p></div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">YUNA SHIN<br />Website Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MICHELLE WANG<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SARAH MIRAE KIM<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">ALLI PARK<br />Fashion Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SERAH KIM<br />Fashion Designer</div>
          </div>
        </div>

        <div class="teams">
          <div class="teamsection"><h2>DESIGN</h2></div>
          <div class="teamsection"><p>Research product ideas and current fashion trends and see how
            to emulate social issues within the designs themselves, brainstorming
            and design. Develop and manage the TIPTOE& website.</p></div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">YUNA SHIN<br />Website Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">MICHELLE WANG<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SARAH MIRAE KIM<br />Website Designer</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">ALLI PARK<br />Fashion Design Leader</div>
          </div>
          <div class="gallery">
            <img src={member_photo} alt="member photo" />
            <div class="desc1">SERAH KIM<br />Fashion Designer</div>
          </div>
        </div>



      </div>
    );
  }
}

export default TeamContent;
