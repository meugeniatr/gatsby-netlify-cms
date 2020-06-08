import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import favicon from '../images/Logos/favicon.png'
import Helmet from 'react-helmet'

import { Header, Footer } from '.'
// import './layout.css'

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="lg">
        <main style={{ margin: '0px 30px 0px' }}>{props.children}</main>
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
