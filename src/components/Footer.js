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
  Box,
  IconButton,
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
import { Image, UnderlinedLink } from '../elements'
import TestweWhite from '../images/Logos/TestweWhite.svg'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    divider: '#ffffff',
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
const StyledLink = styled.a`
  text-decoration: none;
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
          <Grid container alignItems="flex-start" spacing={10}>
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="primary">
                ENTREPRISE
              </Typography>
              <Divider />
              <Box mt={1}>
                <Typography variant="body1" color="primary">
                  À propos
                </Typography>
                <Typography variant="body1" color="primary">
                  <UnderlinedLink to="/partners"> Partenaires </UnderlinedLink>
                </Typography>
                <Typography variant="body1" color="primary">
                  Centre de presse
                </Typography>
              </Box>
            </FooterGrid>
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="primary">
                OUTILS
              </Typography>
              <Divider />
              <Box mt={1}>
                <Typography variant="body1" color="primary">
                  Conditions de privacite
                </Typography>
                <Typography variant="body1" color="primary">
                  <UnderlinedLink to="/terms-conditions">
                    Mentions Legales
                  </UnderlinedLink>
                </Typography>
                <Typography variant="body1" color="primary">
                  Sitemap
                </Typography>
              </Box>
            </FooterGrid>
            <FooterGrid item xs={6} md={3}>
              <Typography variant="body1" color="primary">
                CONTACT
              </Typography>
              <Divider />
              <Box mt={1}>
                <StyledLink href="https://goo.gl/maps/Wc4xZZNaYU6YQvbN8">
                  <Typography variant="body1" color="primary">
                    <LocationIcon
                      fontSize="small"
                      style={{
                        display: 'inline-block',
                        margin: '0px 8px -3px 0px',
                      }}
                    />
                    6 rue de Notre Dame de Nazareth, 75003 Paris, France
                  </Typography>
                </StyledLink>
                <StyledLink href="tel:+330183620928">
                  <Typography variant="body1" color="primary">
                    <PhoneIcon
                      fontSize="small"
                      style={{
                        display: 'inline-block',
                        margin: '0px 8px -3px 0px',
                      }}
                    />
                    +33 01 83 62 09 28
                  </Typography>
                </StyledLink>
                <StyledLink href="mailto:contact@testwe.eu">
                  <Typography variant="body1" color="primary">
                    <MailIcon
                      fontSize="small"
                      style={{
                        display: 'inline-block',
                        margin: '0px 8px -3px 0px',
                      }}
                    />
                    contact@testwe.eu
                  </Typography>
                </StyledLink>
              </Box>
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
                  <IconButton>
                    <a
                      href="https://twitter.com/testwe_eu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon style={{ color: '#ffffff' }} />
                    </a>
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <a
                    href="https://www.facebook.com/Testwe.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <FacebookIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                  </a>
                </Grid>
                <Grid item xs={3}>
                  <IconButton>
                    <a
                      href="https://www.linkedin.com/company/testwe/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon style={{ color: '#ffffff' }} />
                    </a>
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton>
                    <a
                      href="https://www.youtube.com/channel/UCOWXuCoRNGBW5O3vLNRFznw/playlists"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YoutubeIcon style={{ color: '#ffffff' }} />
                    </a>
                  </IconButton>
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

// const Footer = () => {
//   const intl = useIntl()
//   const classes = useStyles()
//   const [language, setLanguage] = React.useState('')

//   const handleChange = event => {
//     setLanguage(event.target.value)
//   }
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <MyFooter>
//         <Container maxWidth="lg">
//           <Grid container alignItems="flex-start" spacing={10}>
//             <FooterGrid item xs={6} md={3}>
//               <Typography variant="body1" color="primary">
//                 ENTREPRISE
//               </Typography>
//               <Divider />
//               <Box mt={1}>
//                 <Typography variant="body1" color="primary">
//                   À propos
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   Partenaires
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   Centre de presse
//                 </Typography>
//               </Box>
//             </FooterGrid>
//             <FooterGrid item xs={6} md={3}>
//               <Typography variant="body1" color="primary">
//                 OUTILS
//               </Typography>
//               <Divider />
//               <Box mt={1}>
//                 <Typography variant="body1" color="primary">
//                   Conditions de privacite
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   Mentions Legales
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   Sitemap
//                 </Typography>
//               </Box>
//             </FooterGrid>
//             <FooterGrid item xs={6} md={3}>
//               <Typography variant="body1" color="primary">
//                 CONTACT
//               </Typography>
//               <Divider />
//               <Box mt={1}>
//                 <Typography variant="body1" color="primary">
//                   <LocationIcon
//                     fontSize="small"
//                     style={{
//                       display: 'inline-block',
//                       margin: '0px 8px -3px 0px',
//                     }}
//                   />
//                   6 rue de Notre Dame de Nazareth, 75003 Paris, France
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   <PhoneIcon
//                     fontSize="small"
//                     style={{
//                       display: 'inline-block',
//                       margin: '0px 8px -3px 0px',
//                     }}
//                   />
//                   01 83 62 09 28
//                 </Typography>
//                 <Typography variant="body1" color="primary">
//                   <MailIcon
//                     fontSize="small"
//                     style={{
//                       display: 'inline-block',
//                       margin: '0px 8px -3px 0px',
//                     }}
//                   />
//                   contact@testwe.eu
//                 </Typography>
//               </Box>
//             </FooterGrid>
//             <Grid container item xs={6} md={3} justify="left">
//               <Image
//                 svg={TestweWhite}
//                 style={{
//                   height: '24px',
//                   width: '110px',
//                   margin: '0px 0px 20px',
//                 }}
//               />
//               <Grid container justify="flex-end">
//                 <Grid item xs={3}>
//                   <TwitterIcon style={{ color: '#ffffff' }} />
//                 </Grid>
//                 <Grid item xs={3}>
//                   <FacebookIcon style={{ color: '#ffffff' }} />
//                 </Grid>
//                 <Grid item xs={3}>
//                   <LinkedinIcon style={{ color: '#ffffff' }} />
//                 </Grid>
//                 <Grid item xs={3}>
//                   <YoutubeIcon style={{ color: '#ffffff' }} />
//                 </Grid>
//               </Grid>
//               <LanguageIcon style={{ color: '#ffffff' }} />
//               <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-simple-select-label">Language</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={language}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={10}>Ten</MenuItem>
//                   <MenuItem value={20}>Twenty</MenuItem>
//                   <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//         </Container>
//       </MyFooter>
//     </ThemeProvider>
//   )
// }

export default Footer
