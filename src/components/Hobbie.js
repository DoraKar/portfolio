import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Hobbie = ({id, image_desc, hobbie_name}) => {
  return (
  <article>
    <Image fluid={image_desc.childImageSharp.fluid} className='blog-img' />
    <div className='blog-card'>
      <h4>{hobbie_name}</h4>
    </div>
  </article>
  )
}

Hobbie.propTypes = {}

export default Hobbie
