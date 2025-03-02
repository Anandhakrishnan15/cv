import React, { useState } from "react";
import FormFields from "./FormFields";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const formFields = [
    {
      label: "Your Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name...",
    },
    {
      label: "Company Name (if applicable)",
      name: "company",
      type: "text",
      placeholder: "Enter your company name...",
    },
    {
      label: "Your Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter your email...",
    },
    {
      label: "How can I help you?",
      name: "message",
      type: "textarea",
      placeholder: "Describe your project or request...",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-holder glass-effect">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-details">
              <h1 className="form-title">Get in Touch</h1>
              <div className="contact-form-holder">
                <FormFields
                  formData={formData}
                  handleChange={handleChange}
                  formFields={formFields}
                />
                <div className="contact-submit-button">
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
