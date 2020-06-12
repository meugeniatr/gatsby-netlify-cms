import React from 'react'
import Collapse from '@material-ui/core/Collapse'

import { PinkPaper, Image } from '../../elements'
import HighSchool from '../../images/Home/HighSchool.svg'
import Enterprise from '../../images/Home/Enterprise.svg'
import TrainingCenter from '../../images/Home/TrainingCenter.svg'
import University from '../../images/Home/University.svg'

import {
  Typography,
  Grid,
  Button,
  IconButton,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core'

import styled from 'styled-components'

const CircleButton = styled(Button)`
    // box-shadow: -8px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    padding: 8px 8px 0px 8px;
    position: relative;
  }
  :focus {
    border: solid 4px;
    border-color: #ffffff;
    border-radius: 50%;
  }

  label.Mui-focused {
    color: green;
  }

  :focus-visible {
    outline: 2px solid blue;
    padding: 8px 8px 0px 8px;
  }
`
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 16,
    h2: {
      fontSize: '1.875em',
      fontWeight: 'bolder',
    },
    body1: {
      fontSize: '0.9em',
    },
  },
})

const Clients = () => {
  const [highchecked, setHighChecked] = React.useState(false)
  const [universitychecked, setUniversity] = React.useState(false)
  const [enterprisechecked, setEnterprise] = React.useState(false)
  const [centerchecked, setCenter] = React.useState(false)

  const handleChangeHigh = () => {
    setHighChecked(!highchecked)
    setUniversity(false)
    setEnterprise(false)
    setCenter(false)
  }

  const handleChangeUniversity = () => {
    setUniversity(!universitychecked)
    setHighChecked(false)
    setEnterprise(false)
    setCenter(false)
  }

  const handleChangeEnterprise = () => {
    setEnterprise(!enterprisechecked)
    setUniversity(false)
    setHighChecked(false)
    setCenter(false)
  }

  const handleChangeCenter = () => {
    setCenter(!centerchecked)
    setEnterprise(false)
    setUniversity(false)
    setHighChecked(false)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <PinkPaper style={{ padding: '60px' }}>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          direction="row"
          xs={12}
        >
          <Grid item xs={12}>
            <Typography variant="h2">
              A perfect fit for every assessment
            </Typography>
            <Typography variant="body1">
              We designed a solution suitable for high school, university or
              even an enterprise. Our specific features will help you understand
              your students or employees, engage them during exams and improve
              educational quality everyday.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <IconButton
              name="highschool"
              checked={highchecked}
              onClick={handleChangeHigh}
            >
              <Image svg={HighSchool} width="106px" height="106" />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={3}>
            <CircleButton
              name="university"
              checked={universitychecked}
              onClick={handleChangeUniversity}
            >
              <Image svg={University} width="106px" height="106" />
            </CircleButton>
          </Grid>
          <Grid item xs={12} md={3}>
            <CircleButton
              name="enterprise"
              checked={enterprisechecked}
              onClick={handleChangeEnterprise}
            >
              <Image svg={Enterprise} width="106px" height="106" />
            </CircleButton>
          </Grid>
          <Grid item xs={12} md={3}>
            <CircleButton
              name="center"
              checked={centerchecked}
              onClick={handleChangeCenter}
            >
              <Image svg={TrainingCenter} width="106px" height="106" />
            </CircleButton>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={highchecked}>
              <Typography>hola</Typography>
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={universitychecked}>
              <Typography>university</Typography>
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={enterprisechecked}>
              <Typography>Enterprise</Typography>
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={centerchecked}>
              <Typography>center</Typography>
            </Collapse>
          </Grid>
        </Grid>
      </PinkPaper>
    </ThemeProvider>
  )
}

export default Clients
