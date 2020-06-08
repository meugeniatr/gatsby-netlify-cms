import React from 'react'

import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { PinkCheckIcon } from '../../elements/SVGS'

import PropTypes from 'prop-types'

const Feature = props => {
  const ref = React.useRef({})
  React.useEffect(() => {
    /* Do something with ref */
  })

  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      alignItems="center"
      justify="left"
      direction="row"
    >
      <Grid item xs={1}>
        <PinkCheckIcon fontSize="large" color="secondary" />
      </Grid>
      <Grid
        container
        item
        xs={11}
        alignItems="left"
        justify="center"
        direction="column"
      >
        <Typography variant="h3">{props.title}</Typography>
        <Typography variant="body1">{props.description}</Typography>
      </Grid>
    </Grid>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const Features = props => {
  const intl = useIntl()
  const features = [
    {
      title: 'Security',
      description: 'Safe personal data, no cheating deal.',
    },
    {
      title: 'Remote & face-to-face',
      description: 'Modern test solution for modern education.',
    },
    {
      title: 'LMS friendly',
      description: 'Integrate  your technology seamlessly.',
    },
    {
      title: 'Here for you!',
      description: 'Our support team is available 24 hs.',
    },
  ]

  return (
    <Grid container spacing={3} alignItems="center" justify="center">
      {features.map(value => {
        return <Feature {...value} />
      })}
    </Grid>
  )
}

export default Features

//   return (
//     <Grid
//       container
//       item
//       xs={6}
//       md={6}
//       alignItems="center"
//       justify="left"
//       direction="column"
//     >
//       <Image padding="0 30%" fluid={props.fluid} alt={props.alt} />
//       <Typography variant="h3">{props.title}</Typography>
//       <Typography variant="body1">{props.description}</Typography>
//     </Grid>
//   )
// }

// Feature.propTypes = {
//   fluid: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// }

// const Features = props => {
//   const intl = useIntl()
//   const data = useStaticQuery(graphql`
//     query {
//       defaultimage: file(relativePath: { eq: "defaultimage.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 800) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   const features = [
//     {
//       fluid: data.defaultimage.childImageSharp.fluid,
//       alt: intl.formatMessage({ id: 'home.feature1' }),
//       title: intl.formatMessage({ id: 'home.title_feat1' }),
//       description: intl.formatMessage({ id: 'home.body_feat1' }),
//     },
//     {
//       fluid: data.defaultimage.childImageSharp.fluid,
//       alt: 'test',
//       title: intl.formatMessage({ id: 'home.title_feat2' }),
//       description: intl.formatMessage({ id: 'home.body_feat2' }),
//     },
//     {
//       fluid: data.defaultimage.childImageSharp.fluid,
//       alt: 'test',
//       title: intl.formatMessage({ id: 'home.title_feat3' }),
//       description: intl.formatMessage({ id: 'home.body_feat3' }),
//     },
//     {
//       fluid: data.defaultimage.childImageSharp.fluid,
//       alt: 'test',
//       title: intl.formatMessage({ id: 'home.title_feat4' }),
//       description: intl.formatMessage({ id: 'home.body_feat4' }),
//     },
//   ]

//   return (
//     <Grid container spacing={3} alignItems="center">
//       {features.map(value => {
//         return <Feature {...value} />
//       })}
//     </Grid>
//   )
// }

// export default Features
