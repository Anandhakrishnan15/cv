import React, { useState } from "react";
import FormFields from "./FormFields";
import "./ContactForm.css"; // Import the CSS file
import SocialIcons from "../../components/SocialIcons";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  // const { testimonials, loading } = useTestimonials();
  // if (loading) return <p>Loading testimonials...</p>;
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading

    setTimeout(() => {
      setIsLoading(false); // Hide loading after 5 sec

      const { name, company, email, message } = formData;
      const subject = `New Contact Inquiry from ${name}`;
      const body = `Name: ${name}\nCompany: ${
        company || "N/A"
      }\nEmail: ${email}\n\n${message}`;

      // Open email client
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=kanandha207@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,"_blank";

      // Clear input fields
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    }, 8000); // 8-second delay
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
        {isLoading ? (
          <div className="loading-overlay">
            <h2>Sending Message...</h2>
          </div>
        ) : (
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
        )}
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactForm;
