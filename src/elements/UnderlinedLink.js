import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

const UnderlinedLink = styled(Link)`
  color: ${props => (props.header ? '#000000' : 'white')};
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
    background-color: ${props => (props.header ? '#000000' : 'white')};
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
    // color: ${props => (props.header ? '#000000' : 'white')}
    color: ${props => (props.demo ? '#e64663' : 'white')};
    background-color: ${props => (props.demo ? '#ffffff' : 'transparent')};
  }
`

export default UnderlinedLink
