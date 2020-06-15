import React from 'react'
import { Layout } from '../components'
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Image, PinkLink } from '../elements'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    fontWeight: 600,
    fontSize: 16,
    color: '#393E46',
  },
}))

const DateTypography = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  color: rgba(196, 196, 196, 0.5);
`
const ExternalLink = styled.a`
  text-decoration: none;
`
const Press = () => {
  const theme = useTheme()
  const data = useStaticQuery(graphql`
    query {
      echos: file(relativePath: { eq: "Press/Echos.png" }) {
        childImageSharp {
          fluid(maxWidth: 206) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pais: file(relativePath: { eq: "Press/ElPais.png" }) {
        childImageSharp {
          fluid(maxWidth: 206) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      franceinfo: file(relativePath: { eq: "Press/Franceinfo.png" }) {
        childImageSharp {
          fluid(maxWidth: 206) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alizee: file(relativePath: { eq: "Press/Alizee.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
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
            <Box>
              <Typography variant="h1">Press</Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Typography variant="body1">
                Have you also been convinced that TestWe is a growing and
                innovative startup and you want to know more?{' '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={7}
          alignItems="center"
          justify="center"
        >
          <Box>
            <List className={classes.root}>
              <ExternalLink
                href="https://www.lesechos.fr/industrie-services/services-conseils/benoit-sillard-prete-son-concours-aux-grandes-ecoles-1194904"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <ListItem alignItems="flex-start">
                  <Image
                    fluid={data.echos.childImageSharp.fluid}
                    alt="logo TestWe"
                    style={{ maxWidth: 206 }}
                    margin="0 40px 0px 40px"
                  />
                  <ListItemText
                    primary={<DateTypography>May 20 2020</DateTypography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="h2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Benoît Sillard prête son concours aux grandes écoles
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </ExternalLink>
              <ExternalLink
                href="https://www.francetvinfo.fr/sante/maladie/coronavirus/nouveau-monde-un-jour-on-pourra-passer-ses-examens-a-la-maison-grace-aux-technologies-selon-la-startup-testwe_3888557.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <ListItem alignItems="flex-start">
                  <Image
                    fluid={data.franceinfo.childImageSharp.fluid}
                    alt="logo TestWe"
                    margin="0 40px 0px 40px"
                    style={{ width: 206 }}
                  />
                  <ListItemText
                    primary={<DateTypography>May 20 2020</DateTypography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="h2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Nouveau monde. "Un jour, on pourra passer ses examens
                          à la maison grâce aux technologies", selon la startup
                          TestWe{' '}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </ExternalLink>
              <ExternalLink
                href="https://elpais.com/economia/2020/05/20/actualidad/1589991912_926551.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <ListItem alignItems="flex-start">
                  <Image
                    fluid={data.pais.childImageSharp.fluid}
                    alt="logo TestWe"
                    style={{ width: 206 }}
                    margin="0 40px 0px 40px"
                  />
                  <ListItemText
                    primary={<DateTypography>May 20 2020</DateTypography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="h2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Llegan los exámenes virtuales: así se evita que los
                          alumnos hagan trampas
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </ExternalLink>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box textAlign="-webkit-center">
            <Image
              fluid={data.alizee.childImageSharp.fluid}
              alt="logo TestWe"
              style={{ width: 180 }}
            />
          </Box>
          <Box m={4}>
            <Box mb={2}>
              <Typography variant="h2" align="center">
                Alizée Pecastaing
              </Typography>
            </Box>
            <Box mb={6}>
              <Typography variant="h4" align="center">
                Tél : +33 (0)7 67 06 89 86
              </Typography>
              <Typography variant="h4" align="center">
                Mail : presse@testwe.eu
              </Typography>
            </Box>
          </Box>
          <Box textAlign="center">
            <PinkLink width="200px">Download kit</PinkLink>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Press
