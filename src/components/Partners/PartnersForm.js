import React, { useReducer, useState } from 'react'
import { TextField, Grid, Typography, Checkbox, Paper } from '@material-ui/core'
import { PinkLink, Section } from '../../elements'
import styled from 'styled-components'
import { Image } from '../../elements'
import ParterBadge from '../../images/Partners/PartnerBadge.svg'

const WhiteTextField = styled(TextField)`
.MuiInputBase-root {
    color: white
}
border: '1px solid #e2e2e1',
overflow: 'hidden',s
borderRadius: 4,
backgroundColor: '#fcfcfb'
`

const initialState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  eMail: '',
  phoneNumber: '',
  country: '',
  message: '',
}

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  }
}

const PartnersForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = event => {
    dispatch({ field: event.target.name, value: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${state.firstName} ${state.lastName}!`)
  }
  const [checked, setChecked] = React.useState(true)

  const handleCheck = event => {
    setChecked(event.target.checked)
  }

  return (
    <Section backgroundColor="inherit">
      <Grid container spacing={10} style={{ marginTop: '10%' }}>
        <Grid
          container
          item
          sm={6}
          direction="column"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h2">Become partners</Typography>
            <Typography variant="body1">
              Take the pludge and join our partner program. Let’s grow together!
            </Typography>
          </Grid>
          <Grid item>
            <Image svg={ParterBadge} height="230px" width="460px" />
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Paper>
            <form noValidate autoComplete="off">
              <Grid
                container
                spacing={3}
                alignItems="flex-end"
                justify="center"
                style={{ padding: 40 }}
              >
                <Typography variant="h4" style={{ paddingBottom: 40 }}>
                  Check how TestWe works in a 30' meeting
                </Typography>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="First name"
                    value={state.FirsttName}
                    onChange={handleInputChange}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="Last name"
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="Job Title"
                    value={state.FirsttName}
                    onChange={handleInputChange}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="E-mail"
                    value={state.FirsttName}
                    onChange={handleInputChange}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="Phone number"
                    value={state.FirsttName}
                    onChange={handleInputChange}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    required
                    id="FirstName"
                    placeholder="Country"
                    value={state.FirsttName}
                    onChange={handleInputChange}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <WhiteTextField
                    fullWidth={true}
                    placeholder="MultiLine with rows: 2 and rowsMax: 4"
                    multiline
                    rows={2}
                    rowsMax={4}
                    color="secondary"
                  />
                </Grid>
                <Grid container item xs={12} justify="center">
                  <PinkLink onClick={handleSubmit}>
                    Get my appointment!{' '}
                  </PinkLink>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  )
}
export default PartnersForm
