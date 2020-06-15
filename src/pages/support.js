import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DescriptionIcon from '@material-ui/icons/Description'
import { Layout } from '../components'
import { Privacy, Students, Teachers } from '../components/Support'
import { Grid, Typography, Tab, Tabs, Paper, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import { PrivacyIcon, TeachersIcon } from '../elements/SVGS'
import PinkText from '../elements/PinkText'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SupportResponsive from '../components/Support/Responsive/SupportResponsive'

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export default function Support() {
  const intl = useIntl()
  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={8}
      >
        <Grid item container sm={12} alignItems="center">
          <Grid item sm={2}>
            <Typography variant="h1">Support</Typography>
          </Grid>
          <Grid item sm={10}>
            <Typography variant="body1">
              The TestWe support team is here to support you!
            </Typography>
            <Typography variant="body1">
              Find the answers to your questions in the FAQ.
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography
              align="center"
              style={{
                fontWeight: 600,
                margin: '3em 0em 0em 0em',
                fontSize: '18px',
              }}
            >
              More questions?
            </Typography>
            <Box
              justifyContent="center"
              alignItems="center"
              marginBottom={'4em'}
            >
              <Typography
                display="inline"
                align="center"
                style={{ fontWeight: 600, fontSize: '18px' }}
              >
                Call us at:
              </Typography>
              <PinkText
                align="center"
                display="inline"
                style={{ fontSize: '18px' }}
              >
                +33 (0)1 83 62 09 28
              </PinkText>
            </Box>
          </Grid>
          {matches ? (
            <div>
              <SupportResponsive />
            </div>
          ) : (
            <div>
              <Grid item container sm={12} alignItems="center">
                <Grid item sm={2}></Grid>
                <Grid item sm={8}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    // indicatorColor="inherit"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                  >
                    <Tab
                      icon={
                        <PrivacyIcon
                          style={{ fontSize: 85, marginBottom: '1rem' }}
                        />
                      }
                      label={intl.formatMessage({
                        id: 'support.privacy.personal-data',
                      })}
                    />
                    <Tab
                      icon={
                        <TeachersIcon
                          style={{ fontSize: 85, marginBottom: '1rem' }}
                        />
                      }
                      label={intl.formatMessage({
                        id: 'support.teachers.support',
                      })}
                    />
                    <Tab
                      icon={
                        <DescriptionIcon
                          style={{ fontSize: 85, marginBottom: '1rem' }}
                        />
                      }
                      label={intl.formatMessage({
                        id: 'support.students.support',
                      })}
                    />
                  </Tabs>
                </Grid>
                <Grid item sm={2}></Grid>
                <TabPanel value={value} index={0}>
                  <Privacy />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Teachers />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Students />
                </TabPanel>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}
