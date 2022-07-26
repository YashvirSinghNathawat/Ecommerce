import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "www.linkedin.com/in/yashvir-singh-nathawat-119a93163";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/df6mxcsxt/image/upload/v1658602565/avatars/qntkqfjh1zebfxntqpif.png"
              alt="Founder"
            />
            <Typography>Yashvir Singh Nathawat</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>This is a Gaming Store made by @yashvirsinghnathawat.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="www.linkedin.com/in/yashvir-singh-nathawat-119a93163"
              target="blank"
            >
              <LinkedIcon className="linkedInSvgIcon" />
            </a>

            <a href="!#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
