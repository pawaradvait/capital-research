import React from 'react'

const ContactUs = () => {
  return (
    <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div>
                <div className="info-section">
                  <h3>Address</h3>
                  <h2>Mbp Mahape Ghansoli</h2>
                </div>

                <div className="info-section">
                  <h3>Get in touch</h3>
                  <p className="phone">8450988560 (For Support)</p>
                </div>

                <div className="info-section">
                  <h3>Email us at</h3>
                  <p className="email">Marketresearchadvisory22@gmail.com</p>
                </div>
              </div>

              <div className="schedule">
                <div className="schedule-item">
                  <span className="schedule-day">Monday to Friday</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-time">09:00 to 06:00 PM</span>
                </div>
                <div className="schedule-item" style={{ marginTop: "15px" }}>
                  <span className="schedule-day">Saturday</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-time">09:30 to 04:00 PM</span>
                </div>
                <div className="schedule-item" style={{ marginTop: "15px" }}>
                  <span className="schedule-day">Sunday Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h1 className="form-title">Get in touch</h1>

              <form id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">&nbsp;</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Mobile Number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="https://wa.me/918450988560"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="WhatsApp">💬</span>
            </a>
            <a href="tel:+918450988560" className="social-icon phone">
              <span role="img" aria-label="Phone">📞</span>
            </a>
          </div>
        </div>
      );
    };

export default ContactUs;