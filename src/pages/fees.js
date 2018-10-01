import React from 'react'
import Layout from "../components/layout"

const Fees = () => (
  <Layout>
    <section id='fees'>
    <div className="banner">
      <div className="banner-inner">
        <h1 className="page-header">Fees</h1>
      </div>
    </div>

      <div className="main-content">
        <div className="main-content-column">
        <p><strong>Initial Consultation: £120.00</strong><br />An initial consultation lasts up to 90 minutes and includes taking a detailed case history, assessment, observation, discussion and the reading of other professional reports if available.</p>
        <p>After completing the assessment, a full written report will be provided outlining the assessment results and giving recommendations for future intervention. The assessment can take more than one session in which case subsequent assessment sessions are charged at the standard therapy session cost of £55.00.</p>
        <p><strong>Standard therapy session: £55.00</strong><br />A standard therapy session lasts up to 75 minutes. The therapy session includes up to 45 minutes of direct (‘face-to-face’) therapy with the child. The remainder of the time will be spent recording what work we carried out during the session, setting ‘homework’ and preparing for the next session.</p>
        <p><strong>Meetings with school staff or other professionals: £55.00 (per hour)</strong></p>
        <p><strong>Writing of individual treatment plans: £55.00 (per hour)</strong></p>
        <p><strong>Travelling charge; £0.50 per mile.</strong><br />A travelling charge of 50 pence per mile applies for mileage of 10 miles and over from my base. Parents will be advised prior to a visit of what this charge is likely to be.</p>
        </div>
        <aside className="sidebar">
          <img className="me" src="/images/mary-jane.jpg" alt="Mary-Jane Iles" />
          <img className="certifications" src="/images/registered-logos.jpg" alt="Certifications that I'm registered to." />
        </aside>
      </div>

    </section>
  </Layout>
)

export default Fees
