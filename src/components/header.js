import React from "react"
import { Link } from "gatsby"
import logo from '../logo.png';

// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

const Header = () => (
  <header id='Header'>
    <div className="Header-inner">
      <div id="logo"><Link to='/'><img src={logo} alt="Mary Jane - Speech Therapy" /></Link></div>
      <div className="contact-details">
        <div id="phone"><h2>01892 723309</h2></div>
        <div id="email"><h5><a href="mailto:maryjane@madpoplars.co.uk">maryjane@madpoplars.co.uk</a></h5></div>
      </div>
    </div>
    <div className="navigation-wrapper">
      <ul id="navigation">
        <li><Link getProps={isActive} to='/'>Home</Link></li>
        <li><Link to='/about-me' getProps={isActive}>About me</Link></li>
        <li><Link to='/testimonials' getProps={isActive}>Testimonials</Link></li>
        <li><Link to='/faqs' getProps={isActive}>FAQs</Link></li>
        <li><Link to='/useful-websites' getProps={isActive}>Useful websites</Link></li>
        <li><Link to='/fees' getProps={isActive}>Fees</Link></li>
        <li><Link to='/contact' getProps={isActive}>Contact</Link></li>
      </ul>
    </div>
  </header>
)

export default Header
