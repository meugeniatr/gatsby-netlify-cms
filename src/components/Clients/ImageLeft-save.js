import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { PinkLink, Image, PinkPaper } from '../../elements'

const ImageLeft = () => {
  const data = useStaticQuery(graphql`
    query {
      HighSchool: file(relativePath: { eq: "HighSchool/HighSchool.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Image
          padding="2% 5%" // TODO: Fix padding
          fluid={data.HighSchool.childImageSharp.fluid}
          alt="logo TestWe"
        />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justify="center">
        <Typography variant="h2">High school</Typography>
        <Typography variant="subtitle1">
          Evaluating student learning at different steps is an important
          process. Assessment is proving to be an essential tool.  TestWe allows
          you to enrich your assessments. to allow a better learning for your
          students and extract Learnings Analytics. All in one solution,
          composed of a creation platform for teachers and administration and
          student software.
        </Typography>
        <PinkLink to="/demo">
          <Typography>Demo</Typography>
        </PinkLink>
      </Grid>
    </Grid>
  )
}

export default ImageLeft
