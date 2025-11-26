// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="section-container">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Let&apos;s discuss your ideas, collaborations, or opportunities.
      </p>
      <div className="contact-wrapper">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const email = "your-email@example.com"; // change to your email
            const subject = encodeURIComponent("Portfolio Contact");
            const message = encodeURIComponent(
              "Hi, I visited your portfolio and would like to connect."
            );
            window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
          }}
        >
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Your Message" rows="4" required />
          </div>
          <button type="submit" className="btn-primary form-btn">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <h3>Other Ways to Reach Me</h3>
          <p>Email: your-email@example.com</p>
          <p>Location: Your City, Country</p>
          <p>
            GitHub: <a href="#">github.com/your-username</a>
          </p>
          <p>
            LinkedIn: <a href="#">linkedin.com/in/your-profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
