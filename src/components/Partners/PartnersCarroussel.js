import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { ChevronLefttIcon, ChevronRightIcon } from '@material-ui/icons'
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import styled from 'styled-components'

const CarrouselItem = styled.div`
  height: 200px;
`

const PartnersCarroussel = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  //   const chevronWidth = 40
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h2">Nos partenaires</Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ padding: '0 60px', maxWidth: '100%', margin: '0 0' }}>
          <ItemsCarousel
            infiniteLoop={false}
            gutter={12}
            activePosition={'center'}
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={4}
            slidesToScroll={1}
            outsideChevron={true}
            showSlither={true}
            firstAndLastGutter={true}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={value => setActiveItemIndex(value)}
            rightChevron={'>'}
            leftChevron={'<'}
          >
            {Array.from(new Array(10)).map((_, i) => (
              <CarrouselItem
                key={i}
                style={{
                  background: 'url(https://placeimg.com/380/200/nature)',
                }}
              />
            ))}
          </ItemsCarousel>
        </div>
      </Grid>
    </Grid>
  )
}

export default PartnersCarroussel
