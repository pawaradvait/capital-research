import React from 'react'

const Header = () => {
  return (
    <>
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-item">
          <span className="icon">📍</span>
          <span className="text">Manage, Navi Mumbai</span>
        </div>

        <div className="top-bar-item">
          <span className="icon">📞</span>
          <span className="text">Free Consultation</span>
        </div>

        <div className="top-bar-item">
          <span className="icon">🕒</span>
          <span className="text">Mon to Fri: 9:00 AM to 06:00 PM</span>
        </div>
      </div>
    </div>

    <header className="header">
      <div className="container1">
        <div className="logo-section">
          <div className="logo">
            <div className="lion-icon">🦁</div>
            <div className="logo-text">
              <span className="company-name">Market Research</span>
              <span className="company-subtitle">Advisory</span>
            </div>
          </div>
        </div>

        <nav className="navigation">
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#packages" className="nav-link">Packages</a></li>
            <li><a href="#consent" className="nav-link">User Consent</a></li>
            <li><a href="#contact" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>

        <div className="cta-section">
          <button className="demo-button">Request a Live demo call now!</button>
        </div>
      </div>

      <div className="support-info">
        <span className="support-text"
          >For Support: <span className="phone-number">+91 8450998560</span></span
        >
      </div>
    </header>

    </>
  )
}

export default Header