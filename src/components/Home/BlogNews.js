import React from 'react'
import { Grid, Typography, Paper, Link } from '@material-ui/core'
import Newsletter from './Newsletter'
import { useStaticQuery, graphql } from 'gatsby'
import { PinkLink } from '../../elements'

const BlogNews = () => {
  const data = useStaticQuery(graphql`
    query getAllPosts {
      allWordpressPost(
        limit: 3
        filter: {
          tags: { elemMatch: { name: { in: ["Crise", "test", "null"] } } }
        }
      ) {
        edges {
          node {
            title
            excerpt
            tags {
              name
            }
            featured_media {
              source_url
              link
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="row"
      spacing={3}
    >
      <Grid item md={8}>
        <Typography variant="h3" display="inline">
          Learn more about TestWe
        </Typography>
        <PinkLink>Blog</PinkLink>
        <Grid container spacing={2}>
          {/* <Typography variant="h4"> */}
          {data.allWordpressPost.edges.map(value => {
            console.log(value)
            return (
              <Grid item xs={12} md={4} spacing={3}>
                <Paper>
                  <div>
                    <Grid item xs={12}>
                      <img
                        src={value.node.featured_media.source_url}
                        width="100%"
                      />
                    </Grid>
                    <Typography variant="h4">{value.node.title}</Typography>
                    <Typography variant="body1">
                      {value.node.excerpt}
                    </Typography>
                    <Link
                      component="button"
                      variant="body1"
                      color="secondary"
                      onClick={() => {
                        console.info("I'm a button.")
                      }}
                    >
                      Read more
                    </Link>
                  </div>
                </Paper>
              </Grid>
            )
          })}
          {/* {result.data.wordpressPost.title} */}
          {/* </Typography> */}
          {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
          <Grid item xs={12} md={4}>
            <Paper>hola</Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper>hola</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Newsletter />
      </Grid>
    </Grid>
  )
}

// export const pageQuery = graphql`
//   query {
//     wordpressPost {
//       title
//       excerpt
//     }
//   }
// `

export default BlogNews
