import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const {
    title,
    hero,
  } = data.allContentfulPage.edges[0].node

  const Bold = ({ children }) => <strong>{children}</strong>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
      renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
  }

  return (
    <Layout>
      <>
        {hero.file.url !== null &&
            <BackgroundImage className="banner" fluid={hero.fluid}>
                <div className="banner-inner">
                    <h1 className="page-header">{title}</h1>
                </div>
            </BackgroundImage>
        }
        <div className="main-content">
            <div className="main-content-column">
                {documentToReactComponents(data.allContentfulPage.edges[0].node.body.json, options)}
            </div>
            <Sidebar />
        </div>
      </>
    </Layout>
  )
}

const Sidebar = () => (
  <aside className="sidebar">
      <img className="me" src="/images/mary-jane.jpg" alt="Mary-Jane Iles" />
      <img className="certifications" src="/images/registered-logos.jpg" alt="Certifications that I'm registered to." />
  </aside>
)

export const query = graphql`
    query homepageQuery {
      allContentfulPage(filter:{slug:{eq:"/"}}) {
        edges {
          node {
            id
            title
            body {
              json
            }
            hero {
                id
                file {
                    url
                }
                fluid(maxWidth: 1200, maxHeight: 250) {
                  ...GatsbyContentfulFluid_withWebp
                }
            }
          }
        }
      }
    }
`
