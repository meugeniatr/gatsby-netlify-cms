import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import {
  Divider,
  Container,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core'
import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  LanguageIcon,
} from '../elements/SVGS'
import { Image } from '../elements'
import TestweWhite from '../images/Logos/TestweWhite.svg'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const MyFooter = styled.footer`
  background-color: #3a3f45;
  padding: 2% 0% 1%;
  margin-top: 3%;
`
const FooterGrid = styled(Grid)`
  padding: 0% 10% 0% 0%;
`
const Footer = () => {
  const intl = useIntl()
  const classes = useStyles()
  const [language, setLanguage] = React.useState('')

  const handleChange = event => {
    setLanguage(event.target.value)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <MyFooter>
        <Container maxWidth="lg">
          <Grid container alignItems="flex-start">
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="textSecondary">
                ENTREPRISE
              </Typography>
              <Divider />
              <Typography variant="body1" color="textSecondary">
                À propos
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Partenaires
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Centre de presse
              </Typography>
            </FooterGrid>
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="textSecondary">
                OUTILS
              </Typography>
              <Divider />
              <Typography variant="body1" color="textSecondary">
                Conditions de privacite
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Mentions Legales
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Sitemap
              </Typography>
            </FooterGrid>
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="textSecondary">
                CONTACT
              </Typography>
              <Divider />
              <Typography variant="body1" color="textSecondary">
                <LocationIcon fontSize="small" />6 rue de Notre Dame de
                Nazareth, 75003 Paris, France
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <PhoneIcon fontSize="small" />
                01 83 62 09 28
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <MailIcon fontSize="small" />
                contact@testwe.eu
              </Typography>
            </FooterGrid>
            <Grid container item xs={6} md={3} justify="left">
              <Image
                svg={TestweWhite}
                style={{
                  height: '24px',
                  width: '110px',
                  margin: '0px 0px 20px',
                }}
              />
              <Grid container justify="flex-end">
                <Grid item xs={3}>
                  <TwitterIcon style={{ color: '#ffffff' }} />
                </Grid>
                <Grid item xs={3}>
                  <FacebookIcon style={{ color: '#ffffff' }} />
                </Grid>
                <Grid item xs={3}>
                  <LinkedinIcon style={{ color: '#ffffff' }} />
                </Grid>
                <Grid item xs={3}>
                  <YoutubeIcon style={{ color: '#ffffff' }} />
                </Grid>
              </Grid>
              <LanguageIcon style={{ color: '#ffffff' }} />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Container>
      </MyFooter>
    </ThemeProvider>
  )
}

export default Footer
