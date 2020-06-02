import React from 'react'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-intl'
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
import { Image } from '../elements'
import TestweWhite from '../images/Logos/TestweWhite.svg'
import { LoginIcon } from '../elements/SVGS'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  border: 2px solid ${props => (props.demo ? '#ffffff' : 'transparent')};
  border-radius: 10px;
  padding: ${props => (props.demo ? '3px' : '0px')};
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
    ${props =>
      !props.demo
        ? 'visibility: visible; transform: scaleX(1);'
        : 'background-color:"#ffffff"; color:"#e64663"; '};
  }
  :hover {
    color: ${props => (props.demo ? '#e64663' : 'white')};
    background-color: ${props => (props.demo ? '#ffffff' : 'transparent')};
  }
`
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

// :hover {
//   color: ${props => (props.demo ? '#e64663' : 'white')};
//   background-color: ${props => (props.demo ? '#ffffff' : 'transparent')};
//   text-decoration: ${props => (props.demo ? 'none' : 'underline')};
//   transition: $animate;

// Header
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
              <Image svg={TestweWhite} height="29px" width="141px" />
            </Grid>
            <Grid item xs style={{ display: matches ? 'none' : 'block' }}>
              <Grid container justify="flex-end" className={classes.title}>
                <MyLink to="#">
                  <NavTypography variant="body1">Software</NavTypography>
                </MyLink>
                <MyLink to="#">
                  <NavTypography variant="body1">Why?</NavTypography>
                </MyLink>
                <MyLink
                  activeStyle={{ color: 'white' }}
                  to="#"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <NavTypography variant="body1">For who?</NavTypography>
                </MyLink>
                <Menu
                  style={{ marginTop: '3%' }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <MyLink to="#">
                  <NavTypography variant="body1">Blog</NavTypography>
                </MyLink>
                <MyLink to="#">
                  <NavTypography variant="body1">Support</NavTypography>
                </MyLink>
                <MyLink demo to="/demo">
                  <NavTypography variant="body1">Demo</NavTypography>
                </MyLink>
                <ExitToAppIcon />
                <MyLink to="https://app.testwe.eu/en/login">
                  <NavTypography variant="body1">Log in</NavTypography>
                </MyLink>
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
