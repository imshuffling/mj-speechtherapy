import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = ({ children }) => (
  <section className="container-wrap">
    <Helmet
      title="Hello and welcome to my website! | Mary Jane - Speech Therapy"
      meta={[
        { name: 'description', content: 'I offer private Speech and Language Therapy to children within the West Kent and East Sussex area.' },
        { name: 'keywords', content: 'speech therapy kent, children speech therapist, children speech therapist kent, children speech therapy' },
      ]}
    />
    <Header />
      {children}
    <Footer />
  </section>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
