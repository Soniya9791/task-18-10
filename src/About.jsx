import React from "react";
import "./About.css";
import image1 from "./image/sampleImg.png";

const About = () => {
  return (
    <div  className="Container1">
      <div className="Container11">
        <div>
          <img className="img" src={image1} alt="" />
        </div>
        <div className="Container2">
          <div className="comp">
            <p>Company</p>
          </div>
          <div className="lead">
            <p>
              <u>A Leading Company</u>
            </p>
          </div>
          <p className="para">
            XYZ Tech Solutions is a premier provider of cutting-edge technology
            solutions dedicated to empowering businesses around the globe.
            Founded in 2010, our company has been at the forefront of the
            digital revolution, offering a comprehensive suite of services
            designed to drive innovation and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
