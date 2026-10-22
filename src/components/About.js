import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Salad bowl with avocado and chickpeas" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Food is an important part of a balanced diet</h1>
        <p className="primary-text">
          We pick seasonal ingredients from local farms and turn them into
          meals that are good for you and taste even better.
        </p>
        <p className="primary-text">
          No frozen food, no shortcuts. Just fresh bowls made the same day.
        </p>
        <div className="about-buttons-container">
          <a href="#work" className="secondary-button">Learn more</a>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
