import React from 'react'
import { Layout, SEO } from '../components'

import { useStaticQuery, graphql } from 'gatsby'

import { Grid } from '@material-ui/core'
import {
  ImageLeft,
  BenefitsImages,
  ExpansivePannel,
} from '../components/Clients'
import {
  Economic,
  LmsFriendly,
  Population,
  Support,
} from '../images/University'

const TrainingCenter = () => {
  const data = useStaticQuery(graphql`
    query {
      TrainingCenter: file(
        relativePath: { eq: "TrainingCenter/TrainingCenter.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="hola" />
      <Grid container spacing={3} alignItems="center">
        <ImageLeft
          variantTitle="h1"
          title="Higher education  and entry exam"
          description="Whether it is on continuous checks or a one-shot exams with large populations, TestWe adapts and offers you a simple creation and management tool for your exams. The solution will help you to have a qualitative reporting of your students and candidates."
          alt="alt"
          fluid={data.TrainingCenter.childImageSharp.fluid}
        />
        <BenefitsImages
          firstSvg={LmsFriendly}
          firstTitle="LMS friendly"
          secondSvg={Support}
          secondTitle="Technical support"
          thirdSvg={Population}
          thirdTitle="Large population"
          fourthSvg={Economic}
          fourthTitle="Economic"
          fifthSvg={Economic}
          fifthTitle="Analytics"
        />
        <ExpansivePannel />
      </Grid>
    </Layout>
  )
}

export default TrainingCenter
