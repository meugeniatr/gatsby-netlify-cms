import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PropTypes from 'prop-types'
import {
  Typography,
  MenuItem,
  Menu,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  Container,
  Grid,
} from '@material-ui/core'
import { Image, UnderlinedLink } from '../elements'
import TestweWhite from '../images/Logos/TestweWhite.svg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { LoginIcon } from '../elements/SVGS'

const NavTypography = styled(Typography)`
  font-weight: 500;
`
const useStyles = makeStyles(theme => ({
  colorPrimary: {
    backgroundImage: theme.palette.primary.mainGradient,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
}))

const Styleda = styled.a`
color: white;
text-decoration: none;
margin-right: 2rem;
border: 0px;
border-radius: 10px;
padding: 0px;
cursor: pointer;
position: relative;

::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

:hover::before {
  visibility: visible; 
  transform: scaleX(1);
}
:hover {
  color: white;
  transparent;
}
`

const StyledLogin = styled(LoginIcon)`
  color: white;
  text-size: 12px;
  display: inline;
`

export default function Header(props) {
  const classes = useStyles()

  // To handle resize
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar
      position="sticky"
      classes={{ colorPrimary: classes.colorPrimary }}
      color="primary"
    >
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            style={{ display: matches ? 'block' : 'none' }}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            alignItems="center"
            justify="centerss"
            className={classes.title}
          >
            <Grid item xs={1}>
              <Link to="">
                <Image svg={TestweWhite} height="29px" width="141px" />
              </Link>
            </Grid>
            <Grid item xs style={{ display: matches ? 'none' : 'block' }}>
              <Grid container justify="flex-end" className={classes.title}>
                <UnderlinedLink to="/product">
                  <NavTypography variant="body1">Software</NavTypography>
                </UnderlinedLink>
                <UnderlinedLink to="/features">
                  <NavTypography variant="body1">Why?</NavTypography>
                </UnderlinedLink>
                <UnderlinedLink
                  activeStyle={{ color: 'white' }}
                  to="#"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <NavTypography variant="body1">For who?</NavTypography>
                </UnderlinedLink>
                <Menu
                  style={{ marginTop: '3%' }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <UnderlinedLink header to="/high-school">
                      High School
                    </UnderlinedLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/university">University</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/university">Training Center</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/university">Enterprise</Link>
                  </MenuItem>
                </Menu>
                <UnderlinedLink to="#">
                  <NavTypography variant="body1">Blog</NavTypography>
                </UnderlinedLink>
                <UnderlinedLink to="/support">
                  <NavTypography variant="body1">Support</NavTypography>
                </UnderlinedLink>
                <UnderlinedLink demo to="/demo">
                  <NavTypography variant="body1">Demo</NavTypography>
                </UnderlinedLink>
                <LoginIcon fontSize="small" color="primary" />
                <Styleda
                  href="https://app.testwe.eu/fr/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavTypography variant="body1">Log in</NavTypography>
                </Styleda>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
