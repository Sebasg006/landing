import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const steps = [
  {
    image: PickMeals,
    title: "Pick meals",
    text: "Browse a weekly menu of bowls, salads and wraps made by our chefs.",
  },
  {
    image: ChooseMeals,
    title: "Choose how often",
    text: "Order once or set a plan that fits your week. Change it anytime.",
  },
  {
    image: DeliveryMeals,
    title: "Fast deliveries",
    text: "Your food arrives hot and fresh, right when you need it.",
  },
];

const Work = () => {
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          Three simple steps between you and a healthy meal.
        </p>
      </div>
      <div className="work-section-bottom">
        {steps.map((step) => (
          <div className="work-section-info" key={step.title}>
            <div className="info-boxes-img-container">
              <img src={step.image} alt="" />
            </div>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
