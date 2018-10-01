import React from 'react'
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
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
          <img className="me" src="/images/mary-jane.jpg" alt="Mary-Jane Iles" />
          <img className="certifications" src="/images/registered-logos.jpg" alt="Certifications that I'm registered to." />
        </aside>
      </div>

    </section>

  </Layout>
)

export default Contact
