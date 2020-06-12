import React from 'react'

import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { PinkCheckIcon } from '../../elements/SVGS'

import PropTypes from 'prop-types'

const Feature = props => {
  React.useEffect(() => {
    /* Do something with ref */
  })
  const theme = useTheme()
  const alignItems = useMediaQuery(theme.breakpoints.down('sm'))
    ? 'center'
    : 'center'
  const spacing = useMediaQuery(theme.breakpoints.down('xs')) ? '2' : '1' //TODO MEDIA QUERY BETWEEN 'md' and 'lg'

  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      alignItems={alignItems}
      justify={alignItems}
      direction="row"
    >
      <Grid item xs={spacing}>
        <PinkCheckIcon fontSize="large" color="secondary" />
      </Grid>
      <Grid
        container
        item
        xs={9}
        md={8}
        alignItems="left"
        justify="left"
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
