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
  Analytics,
  Assessment,
  Clock,
  Settings,
  FaceToFace,
} from '../images/HighSchool'

const HighSchool = () => {
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
    <Layout>
      <SEO title="hola" />
      <Grid container spacing={3} alignItems="center">
        <ImageLeft
          variantTitle="h1"
          title="High school"
          description="Evaluating student learning at different steps is an important
          process. Assessment is proving to be an essential tool.  TestWe allows
          you to enrich your assessments. to allow a better learning for your
          students and extract Learnings Analytics. All in one solution,
          composed of a creation platform for teachers and administration and
          student software."
          alt="alt"
          fluid={data.HighSchool.childImageSharp.fluid}
        />
        <BenefitsImages
          firstSvg={Settings}
          firstTitle="Flexible solution"
          secondSvg={Assessment}
          secondTitle="Qualitative assessments"
          thirdSvg={FaceToFace}
          thirdTitle="Collaborative tool"
          fourthSvg={Clock}
          fourthTitle="Fast creation process"
          fifthSvg={Analytics}
          fifthTitle="Analytics"
        />
        <ExpansivePannel />
      </Grid>
    </Layout>
  )
}

export default HighSchool
