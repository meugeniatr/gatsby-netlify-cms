import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Grid, Typography } from '@material-ui/core'
import {
  PartnersCarroussel,
  PartnerTypes,
  PartnersForm,
} from '../components/Partners'

import { Layout, SEO } from '../components'

const Partners = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'title' })} />
      <Grid container spacing={10}>
        <Grid item>
          <Typography variant="h1" display="inline">
            Partners
          </Typography>
          <Typography variant="body1" display="inline">
            Text
          </Typography>
        </Grid>
        <PartnerTypes />
        <Grid item sm={12}>
          <PartnersCarroussel />
        </Grid>
      </Grid>
      <PartnersForm />
    </Layout>
  )
}
export default Partners
