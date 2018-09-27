import React from 'react'
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section id='home'>
      <div className="banner">
        <div className="banner-inner">
          <h1 className="page-header">Hello and welcome to my website!</h1>
        </div>
      </div>

      <div className="main-content">

      <div className="main-content-column">
        <p>My name is Mary Jane Iles. I work with children from aged 2 years old up to teenagers and their parents within the West Kent and East Sussex area.</p>
        <p>For some children learning to communicate does not come easily or is an ongoing difficulty. This can happen for a number of different reasons, and can leave children and parents feeling frustrated and isolated.</p>
        <p>2-3 children in every classroom have significant communication difficulties (Ican website) but many more have less significant problems that still impact on their everyday ability to talk and engage with others.</p>
        <p>Many children and young people with communication difficulties can be helped to develop their learning, enjoy school, make friends and reach their full potential. As a speech and language therapist I can offer this specialist help and also give practical advice or training to parents, carers and other professionals about how best to support youngsters with communication difficulties.</p>
        <p>I hope you can find the information you need on this website but please feel free to contact me with any queries relating to your child's speech, language or communication needs.</p>
      </div>
        <aside className="sidebar">
          <img className="me" src="/static/images/mary-jane.jpg" alt="Mary-jane Iles" />
          <img className="certifications" src="/static/images/registered-logos.jpg" alt="Certifications that I'm registered to." />
        </aside>
      </div>

    </section>
  </Layout>
)

export default IndexPage
