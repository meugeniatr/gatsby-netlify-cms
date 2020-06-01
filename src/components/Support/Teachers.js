import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useIntl } from 'gatsby-plugin-intl'
import withStyles from '@material-ui/core/styles/withStyles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const IconLeftExpansionPanelSummary = withStyles({
  expandIcon: {
    order: -1,
  },
})(ExpansionPanelSummary)

const Teachers = () => {
  const intl = useIntl()
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Typography variant="body1">
        {intl.formatMessage({
          id: 'support.privacy.subtitle',
        })}
      </Typography>
      <Typography style={{ margin: '1%' }}>Je suis un sujet</Typography>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis une question par rappor a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Je suis une reponse par rappor a ce sujet</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis une autre question par rapport a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Je suis une autre reponse par rapport a ce sujet
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis la troisieme question par rapport a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Je suis une reponse par rapport a ce sujet</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Typography style={{ margin: '1%' }}>Je suis un autre sujet</Typography>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis une question par rapport a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Je suis une reponse par rapport a ce sujet</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis une autre question par rapport a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Je suis une autre reponse par rapport a ce sujet
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Je suis la troisieme question par rapport a ce sujet
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Je suis une reponse par rapport a ce sujet</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon edge="start" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.commerce-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.commerce-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.services-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.services-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.cgu-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.cgu-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.admin-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.admin-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.interactions-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.interactions-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.control-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.control-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.server-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.server-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.aws-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.aws-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className={classes.heading}>
            {intl.formatMessage({
              id: 'support.privacy.access-tab',
            })}
          </Typography>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {intl.formatMessage({
              id: 'support.privacy.access-body',
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Teachers
