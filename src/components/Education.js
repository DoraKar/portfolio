import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaSuitcase } from "react-icons/fa"
import { MdWork } from "react-icons/fa"

const Education = ({id, school, duration}) => {
  return (
    
  <section className='section jobs' className='noselect'>
    <div className='job-center'>
      <article className='job-info'>
      <h3>{school}</h3>
      <p className='job-date'>{duration}</p>
      </article>
    </div>
  </section>
    
)

}

Education.propTypes = {}

export default Education