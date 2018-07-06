import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <header id='Header'>
    <div className="Header-inner">
      <div id="logo"><Link to='/'><img src="../images/logo.png" alt="Mary Jane - Speech Therapy" /></Link></div>
      <div className="contact-details">
        <div id="phone"><h2>01892 723309</h2></div>
        <div id="email"><h5><a href="mailto:maryjane@madpoplars.co.uk">maryjane@madpoplars.co.uk</a></h5></div>
      </div>
    </div>
    <div className="navigation-wrapper">
      <ul id="navigation">
        <li><Link exact to='/'>Home</Link></li>
        <li><Link to='/about-me' activeClassName="active">About me</Link></li>
        <li><Link to='/testimonials' activeClassName="active">Testimonials</Link></li>
        <li><Link to='/faqs' activeClassName="active">FAQs</Link></li>
        <li><Link to='/useful-websites' activeClassName="active">Useful websites</Link></li>
        <li><Link to='/fees' activeClassName="active">Fees</Link></li>
        <li><Link to='/contact' activeClassName="active">Contact</Link></li>
      </ul>
    </div>
  </header>
)

const Footer = () => (
  <footer id="Footer">
    <div className="Footer-inner">
      <div><p>Mary Jane Iles © 2018</p></div>
      <div><p><Link to='/privacy-policy'>Privacy policy</Link></p></div>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <section>
    <Helmet
      title="Hello and welcome to my website! | Mary Jane - Speech Therapy"
      meta={[
        { name: 'description', content: 'I offer private Speech and Language Therapy to children within the West Kent and East Sussex area.' },
        { name: 'keywords', content: 'speech therapy kent, children speech therapist, children speech therapist kent, children speech therapy' },
      ]}
    />
    <Header />
      {children()}
    <Footer />
  </section>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
