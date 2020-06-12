import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import StyledExpansionPanel from './StyledExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

const StyledIconLeftExpansion = styled(ExpansionPanelSummary)`
  .MuiExpansionPanelSummary-expandIcon {
    order: -1;
    color: '#393E46';
  }

  .MuiExpansionPanelSummary-expandIcon.Mui-expanded {
    color: #e64663;
  }
  }
`
//const color = if MuiExpansionPanelSummary-expandIcon.Mui-expanded = true, color = pink, else, dark

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
    fontWeight: 600,
    fontColor: '#393E46',
    color: '#393E46',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  body: {
    padding: '0px 0px 0px 40px',
  },
}))

const Privacy = () => {
  const intl = useIntl()
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Box mt={'2em'}>
        <Typography variant="body1" align="center">
          {intl.formatMessage({
            id: 'support.privacy.subtitle',
          })}
        </Typography>
      </Box>
      <Box ml={'9em'} mr={'14em'} mt={'2em'}>
        <StyledExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon edge="start" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.commerce-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              {intl.formatMessage({
                id: 'support.privacy.commerce-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.services-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.services-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.cgu-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.cgu-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.admin-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.admin-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.interactions-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.interactions-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.control-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.control-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.server-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.server-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.aws-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.aws-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
        <StyledExpansionPanel
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
        >
          <StyledIconLeftExpansion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>
              {intl.formatMessage({
                id: 'support.privacy.access-tab',
              })}
            </Typography>
          </StyledIconLeftExpansion>
          <ExpansionPanelDetails>
            <Typography>
              {intl.formatMessage({
                id: 'support.privacy.access-body',
              })}
            </Typography>
          </ExpansionPanelDetails>
        </StyledExpansionPanel>
      </Box>
    </div>
  )
}

export default Privacy
