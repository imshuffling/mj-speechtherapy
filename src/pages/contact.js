import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section id='contact'>
  <div className="banner">
    <div className="banner-inner">
      <h1 className="page-header">Contact me</h1>
    </div>
  </div>

  <div className="main-content">
    <div className="main-content-column">
      <p>If you would like to talk about your child, and how I may be able to help.<br />Please contact me on&nbsp;01892 723309&nbsp;or&nbsp;<a href="mailto:maryjane@madpoplars.co.uk">maryjane@madpoplars.co.uk</a></p>
    </div>
      <aside className="sidebar">
        <img className="me" src="../images/mary-jane.jpg" alt="Picture of me" />
        <img className="certifications" src="../images/registered-logos.jpg" alt="Certifications that I'm registered to." />
      </aside>
    </div>

  </section>
)

export default Contact
