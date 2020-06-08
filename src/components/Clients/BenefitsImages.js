import React from 'react'

import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Image, PinkPaper } from '../../elements'

const BenefitsImages = props => {
  const intl = useIntl()
  return (
    <Grid container spacing={3} alignItems="flex-start">
      <Grid item xs={12}>
        <PinkPaper style={{ width: '227px' }}>
          <Typography variant="h2" color="primary">
            Benefits
          </Typography>
        </PinkPaper>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignItems="flex-start"
        justify="space-evenly"
        direction="row"
      >
        <Grid container item xs={12} md={1} justify="space-evenly">
          <Image svg={props.firstSvg} style={{ maxWidth: '93px' }} />
          <Typography variant="h4" display="inline">
            {props.firstTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Image svg={props.secondSvg} style={{ maxWidth: '74px' }} />
          <Typography variant="h4">{props.secondTitle}</Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Image svg={props.thirdSvg} style={{ maxWidth: '114px' }} />
          <Typography variant="h4">{props.thirdTitle}</Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Image svg={props.fourthSvg} style={{ maxWidth: '89px' }} />
          <Typography variant="h4">{props.fourthTitle}</Typography>
        </Grid>
        <Grid item xs={12} md={1}>
          <Image svg={props.fifthSvg} style={{ maxWidth: '86px' }} />
          <Typography variant="h4">{props.fifthTitle}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BenefitsImages
