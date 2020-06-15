import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ItemsExpansionPanel } from './'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}))

const Students = () => {
  const classes = useStyles()
  const studentsItems = [
    {
      heading: 'support.privacy.commerce-tab',
      body: 'support.privacy.commerce-body',
    },
    {
      heading: 'support.privacy.services-tab',
      body: 'support.privacy.services-body',
    },
    {
      heading: 'support.privacy.cgu-tab',
      body: 'support.privacy.cgu-body',
    },
    {
      heading: 'support.privacy.admin-tab',
      body: 'support.privacy.admin-body',
    },
    {
      heading: 'support.privacy.interactions-tab',
      body: 'support.privacy.interactions-body',
    },
    {
      heading: 'support.privacy.control-tab',
      body: 'support.privacy.control-body',
    },
    {
      heading: 'support.privacy.server-tab',
      body: 'support.privacy.server-body',
    },
    {
      heading: 'support.privacy.aws-tab',
      body: 'support.privacy.aws-body',
    },
    {
      heading: 'support.privacy.access-tab',
      body: 'support.privacy.access-body',
    },
  ]

  return (
    <div className={classes.root}>
      <ItemsExpansionPanel
        subtitle="support.students.subtitle"
        items={studentsItems}
      />
    </div>
  )
}

export default Students
