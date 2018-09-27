import React from 'react'
import Layout from "../components/layout"

const AboutMe = () => (
  <Layout>
    <section id='about-me'>
    <div className="banner">
      <div className="banner-inner">
        <h1 className="page-header">About me</h1>
      </div>
    </div>

      <div className="main-content">
        <div className="main-content-column">
          <p>I trained as a Speech and Language Therapist in London qualifying in 1983. I worked in a wide range of community, hospital and educational settings both in London and Kent within NHS Speech and Language Therapy departments until I began my Independent Practise in 2001. I love the flexibility that working independently gives; offering appointments to children in their homes, pre-schools and/or schools and being able to truly focus therapy to the particular needs of each child.</p>
          <h2>I have experience working with children from pre-school to early teens offering help with:</h2>
          <ul>
            <li>Delayed/ disordered phonology (unclear speech)</li>
            <li>Dyspraxia</li>
            <li>Children who are slow to start talking</li>
            <li>Difficulties with word order, grammar or sentence construction</li>
            <li>Difficulties with vocabulary and word-finding</li>
            <li>Attention and listening difficulties</li>
            <li>Auditory memory difficulties</li>
            <li>Comprehension difficulties</li>
            <li>Difficulty in asking or answering questions</li>
            <li>Social skills difficulties</li>
            <li>Communication difficulties associated with autism, aspergers syndrome or moderate learning difficulties</li>
          </ul>
          <p>I am a member of the Royal College of Speech and Language Therapists (RCSLT) and the Association of Speech and Language Therapists in Independent Practice (ASLTIP). I am registered with the Health and Care Professions Council (HCPC). These bodies ensure that we maintain certain professional standards and continue our professional development through training courses, peer meetings etc.</p>
        </div>
        <aside className="sidebar">
          <img className="me" src="/static/images/mary-jane.jpg" alt="Mary-Jane Iles" />
          <img className="certifications" src="/static/images/registered-logos.jpg" alt="Certifications that I'm registered to." />
        </aside>
      </div>

    </section>
  </Layout>
)

export default AboutMe
