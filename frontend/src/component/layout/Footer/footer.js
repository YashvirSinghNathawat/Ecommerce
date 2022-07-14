import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css";
const footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4>DOWNLOAD OUT APP</h4>
        <p>Down App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div class="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2021 &copy; YSNathawat</p>
      </div>
      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/yashvir-singh-nathawat-119a93163/">
          LinkedIn
        </a>
        <a href="https://www.linkedin.com/in/yashvir-singh-nathawat-119a93163/">
          Youtube
        </a>
        <a href="https://www.linkedin.com/in/yashvir-singh-nathawat-119a93163/">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default footer;
