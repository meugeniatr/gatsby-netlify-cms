import React from 'react'
import { Grid, Typography, Paper, TextField, Button } from '@material-ui/core'
import { Image } from '../../elements'
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
import styled from 'styled-components'
import Plane from '../../images/Home/Plane.svg'

const DarkButton = styled(Button)`
  padding: 5px 10px;
  background-image: ${theme.palette.primary.mainGradient};
  background-color: #E64663;
  color: white;
  border-radius: 15px;
  text-transform: none;
  padding: 3px 10px;
  width: 150.71px;
  height: 30px;
  :hover {
    transform: scale(1.05);
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
:visited{
    background-color: #D82644;
}
  }
`
const Newsletter = () => {
  return (
    <Grid container alignItems="center" justify="center" direction="row">
      <Paper style={{ padding: '19px 25px' }}>
        <Grid
          item
          container
          alignItems="flex-end"
          justify="left"
          direction="row"
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h3">Keep yourself updated</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ color: 'secondary' }}>E-mail* :</Typography>
          </Grid>
          <Grid item>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                required="true"
                color="secondary"
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <DarkButton> Hola </DarkButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Newsletter
