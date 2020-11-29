import React from "react";
import { Base } from "../_base/Base";
import { TeamContent } from "./teamsection";
import TeamImage from "../image/teamresize.jpg";
import "./about.css";
import "../content.css";

const AboutContent = () => {
  return (
    <div className="pb-3">
      <section>
        <img src={TeamImage} className="titleImage" alt="Tiptoe Mission" />
      </section>
      <section>
        <div className="container-fluid justify-content-center text-center intext">
          <p className="titleText pt-2">Our Mission</p>
          <p className="descriptionText">
            Clothing is the final layer of expressing oneself and their values.
            TIPTOE& is a fashion enterprise that aims to transform the
            traditional fundraising T-shirts into trendy streetwear to raise
            awareness of various social issues. By adding a layer of meaning to
            our clothing, our company hopes to present new perspective.
          </p>
          <center>
            <div className="video">
              <iframe
                src="https://drive.google.com/file/d/1kL-MWddDOhm04RxBnxE-5LNozGKi0mnw/preview"
                width="720"
                height="480"
                title="TT Our Story Video"
              ></iframe>
            </div>
          </center>

          <p className="descriptionText">
            Our name comes from the idea that it doesn't take much effort to
            tiptoe and peer over a wall to gain a whole new perspective.
          </p>
          <p className="descriptionText">
            TIPTOE& was founded by three Cornell students with two questions in
            mind:{" "}
          </p>
          <p className="descriptionText">
            Why are fundraising T-shirts poorly designed?
            <br />
            Why is streetwear always associated with social resistance?
          </p>
          <p className="headerText">We are challenging these norms.</p>
          <p className="descriptionText">
            By combining streetwear's provacative design with fundraising's
            social cause, we aim to{" "}
            <strong>redefine the culture of donation</strong>. A good cause
            doesn't necessarily have to precede consumerism. TIPTOE& partners
            with different NGOs for every social cause we want to uncover.
            Tiptoe& donates a share of profits to the partnering NGOs. So we
            encourage you to join us and throw on another layer.
          </p>
        </div>
      </section>
      <TeamContent />
    </div>
  );
};

function About() {
  return <Base content={AboutContent} />;
}
export { About };
