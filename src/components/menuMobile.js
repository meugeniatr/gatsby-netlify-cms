import React from 'react'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const StyledListItemText = withStyles({
  root: {
    textAlign: 'center',
    margin: 15,
  },
})(ListItemText)

const StyledExpandLess = withStyles({
  root: {
    width: '2em',
  },
})(ExpandLess)

const StyledExpandMore = withStyles({
  root: {
    width: '2em',
  },
})(ExpandMore)

const DemoListItem = withStyles({
  root: {
    color: '#ffffff',
    backgroundColor: '#E64663',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#E64663',
    },
  },
})(ListItem)

const MenuMobile = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <List
      component="nav"
      className={classes.root}
      aria-label="mailbox folders"
      alignItems="flex-start"
      style={{ padding: '0 2em 2em 2em' }}
    >
      <ListItem button>
        <StyledListItemText primary="Solutions" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <StyledListItemText primary="Features" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon></ListItemIcon>
        <StyledListItemText primary="Our users" />
        {open ? <StyledExpandLess /> : <StyledExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItem button>
            <StyledListItemText primary="High School & Entrance Examination" />
          </ListItem>
          <ListItem button>
            <StyledListItemText primary="Higher Education" />
          </ListItem>
          <ListItem button>
            <StyledListItemText primary="Enterprises" />
          </ListItem>
          <ListItem button>
            <StyledListItemText primary="Training Center" />
          </ListItem>
        </List>
      </Collapse>
      <Divider light />
      <ListItem button>
        <StyledListItemText primary="Blog" />
      </ListItem>
      <Divider light />
      <DemoListItem button>
        <StyledListItemText primary="Demo" />
      </DemoListItem>
    </List>
  )
}

export default MenuMobile
