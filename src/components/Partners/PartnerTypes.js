import React from 'react'

import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PartnersTech from '../../images/Partners/PartnersTech.svg'
import PartnersCorporate from '../../images/Partners/PartnersCorporate.svg'
import PartnersReseller from '../../images/Partners/PartnersReseller.svg'

import { Image } from '../../elements'
import styled from 'styled-components'
import theme from '../../gatsby-theme-material-ui-top-layout/theme'

const TypographySpaced = styled(Typography)`
  margin-top: ${theme.spacing(3)}px;
`

const Type = props => {
  const padding = '0 40px'
  return (
    <Grid
      container
      item
      xs={12}
      md={4}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Grid item>
        <Image svg={props.svg} height="85px" width="85px" />
      </Grid>
      <Grid item style={{ padding: padding }}>
        <TypographySpaced variant="h3">{props.title}</TypographySpaced>
      </Grid>
      <Grid item style={{ padding: padding }}>
        <TypographySpaced align="center" variant="body1">
          {props.text}
        </TypographySpaced>
      </Grid>
    </Grid>
  )
}

const PartnerTypes = () => {
  const intl = useIntl()
  return (
    <Grid container spacing={1} alignItems="flex-start">
      <Type
        svg={PartnersTech}
        title="Tech/Publishing Partner"
        text="Create the swifest integration for your LMS and e-learning tools Easy with our LTI connection"
      />
      <Type
        svg={PartnersCorporate}
        title="Corporate Partner"
        text="Embed your ressources within our solution. Your users will build their own exams based on your content"
      />
      <Type
        svg={PartnersReseller}
        title="Channel Partner"
        text="Want to represent TestWe in your country? Let’s talk! Discover our channel program"
      />
    </Grid>
  )
}

export default PartnerTypes
