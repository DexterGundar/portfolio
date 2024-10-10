import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const validatePhone = (e) => {
    let phone = e.target.value;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);
    emailjs
      .sendForm("service_0oyt6sh", "template_ol63fso", form.current, {
        publicKey: "qAXNuPrcckqI_70nQ",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          To get in touch please use Get In Touch from home, LinkedIn link from
          footer or fill in this form and submit:
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
              onChange={(e) => validatePhone(e)}
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm"> I accept the terms</span>
        </label>
        <div>
          <button
            disabled={emailSent}
            className="btn btn-primary contact--form-btn"
          >
            Submit
          </button>
          <p className="skills--section--heading">
            {" "}
            {emailSent ? `E-mail sent` : ""}
          </p>
        </div>
      </form>
    </section>
  );
}
