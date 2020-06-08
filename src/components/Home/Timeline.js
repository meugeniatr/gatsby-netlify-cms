import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Grid,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}))

function getSteps() {
  return [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
    'Create an ad',
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings Select campaign settings Select campaign settings'
    case 1:
      return 'What is an ad group anyways?'
    case 2:
      return 'This is the bit I really care about!'
    case 3:
      return 'This is the bit I really care about!'
    default:
      return 'Unknown stepIndex'
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles()
  const steps = getSteps()

  const theme = useTheme()
  const orientation = useMediaQuery(theme.breakpoints.down('sm'))
    ? 'vertical'
    : 'horizontal'

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel orientation={orientation}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
