import React from 'react'

import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Image, PinkLink } from '../../elements'

import PropTypes from 'prop-types'

const ImageLeft = props => {
  const intl = useIntl()
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Image fluid={props.fluid} alt={props.alt} />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant={props.variantTitle}>{props.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{props.description}</Typography>
          <PinkLink to={props.buttonLink}>
            <Typography>{intl.formatMessage({ id: 'home.demo' })}</Typography>
          </PinkLink>
        </Grid>
        <Grid item xs={12}>
          <PinkLink to={props.buttonLink}>
            <Typography>Toooooo</Typography>
          </PinkLink>
        </Grid>
      </Grid>
    </Grid>
  )
}

ImageLeft.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
ImageLeft.defaultProps = {
  variantTitle: 'h2',
}

export default ImageLeft
