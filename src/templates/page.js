import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import BackgroundImage from 'gatsby-background-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
    //console.log(data)
    const {
      title,
      hero,
    } = data.contentfulPage

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
            <Helmet>
                <title>{title} - Mary Jane Speech Therapy</title>
            </Helmet>
            {hero.file.url !== null &&
                <BackgroundImage className="banner" fluid={hero.fluid}>
                    <div className="banner-inner">
                        <h1 className="page-header">{title}</h1>
                    </div>
                </BackgroundImage>
            }
            <div className="main-content">
                <div className="main-content-column">
                    {documentToReactComponents(data.contentfulPage.body.json, options)}
                </div>
                <Sidebar />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query pageQuery($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
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
`