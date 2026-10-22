import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Have a question in mind?</h1>
      <h1 className="primary-heading">Let us help you</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="secondary-button" type="submit">
          {sent ? "Thanks!" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
