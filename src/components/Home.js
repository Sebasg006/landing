import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your favourite food, delivered hot and fresh
          </h1>
          <p className="primary-text">
            Healthy bowls cooked by real chefs and delivered to your door in
            under 30 minutes.
          </p>
          <a href="#work" className="secondary-button">
            Order now <FiArrowRight />
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Bowl with tofu, vegetables and egg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
