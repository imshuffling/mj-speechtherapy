import React from 'react'
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <section id='404'>
      <div className="banner">
        <div className="banner-inner">
          <h1 className="page-header">Hello and welcome to my website!</h1>
        </div>
      </div>
      <div className="main-content">
      <div className="main-content-column">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
