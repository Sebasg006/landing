import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What they are saying</h1>
        <p className="primary-text">
          Thousands of meals delivered every week to people who care about what
          they eat.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="testimonial-avatar">LM</div>
        <p>
          "I order lunch three times a week. It always arrives on time and it
          is the only healthy food I actually look forward to."
        </p>
        <div className="testimonials-stars-container">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
        <h2>Laura M.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
