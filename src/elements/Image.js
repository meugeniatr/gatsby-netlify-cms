import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Resize = styled.div`
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`

export default function Image(props) {
  return (
    <Resize {...props}>
      {props.svg ? <img src={props.svg} alt={props.alt} /> : <Img {...props} />}
    </Resize>
  )
}

Image.defaultProps = {
  alt: '',
}
