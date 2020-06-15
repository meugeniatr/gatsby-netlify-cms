import React from 'react'
import Box from '@material-ui/core/Box'
import StyledExpansionPanel from './StyledExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const StyledIconLeftExpansion = styled(ExpansionPanelSummary)`
  .MuiExpansionPanelSummary-expandIcon {
    order: -1;
    color: '#393E46';
  }

  .MuiExpansionPanelSummary-expandIcon.Mui-expanded {
    color: #e64663;
  }
`

const useStyles = makeStyles(theme => ({
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

const ItemsExpansionPanel = props => {
  const intl = useIntl()
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      <Box mt={'2em'}>
        <Typography variant="body1" align="center">
          {intl.formatMessage({
            id: props.subtitle,
          })}
        </Typography>
      </Box>
      <Box ml={'9em'} mr={'14em'} mt={'2em'}>
        {props.items.map((item, index) => {
          return (
            <StyledExpansionPanel
              expanded={expanded === `panel-${index}`}
              onChange={handleChange(`panel-${index}`)}
            >
              <StyledIconLeftExpansion
                expandIcon={<ExpandMoreIcon edge="start" />}
                // aria-controls="panel1bh-content"
                // id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  {intl.formatMessage({
                    id: item.heading,
                  })}
                </Typography>
              </StyledIconLeftExpansion>
              <ExpansionPanelDetails>
                <Typography className={classes.body}>
                  {intl.formatMessage({
                    id: item.body,
                  })}
                </Typography>
              </ExpansionPanelDetails>
            </StyledExpansionPanel>
          )
        })}
      </Box>
    </Box>
  )
}

ItemsExpansionPanel.propTypes = {
  items: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default ItemsExpansionPanel
