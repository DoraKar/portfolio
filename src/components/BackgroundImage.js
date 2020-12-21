import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const BackgroundSection = ({className})=> {
  const data = useStaticQuery(
    graphql`
     query {
        desktop: file(relativePath: { eq: "flowers.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

const imageData = data.desktop.childImageSharp.fluid

return (
  <BackgroundImage Tag='section' className={className} fluid={imageData} backgroundColor={'#040e18'}>
    <h2></h2>
  </BackgroundImage>
)
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: repeat-yield;
  background-size: cover;
  `

  export default StyledBackgroundSection