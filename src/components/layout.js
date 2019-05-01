import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticQuery, graphql } from "gatsby"
import '../styles/index.scss'
import 'typeface-pt-sans'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulNavigation {
          menuItem {
          __typename
            ... on ContentfulPage {
              title
              slug
              menuTitle
            }
          }
        }
      }
  `}
  render={data => (
    <section className="container-wrap">
      <Helmet
        title="Hello and welcome to my website! | Mary Jane - Speech Therapy"
        meta={[
          { name: 'description', content: 'I offer private Speech and Language Therapy to children within the West Kent and East Sussex area.' },
          { name: 'keywords', content: 'speech therapy kent, children speech therapist, children speech therapist kent, children speech therapy' },
        ]}
      />
      <Header nav={data} />
      {children}
      <Footer />
    </section>
    )}
  />
)

export default Layout
