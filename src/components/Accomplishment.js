import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaMedal } from "react-icons/fa"
import { MdWork } from "react-icons/fa"

const Accomplishment = ({id, acc_type, acc_name, acc_desc}) => {
  return (
    
  <section className='section jobs'>
    <div className='job-center'>
      <article className='job-info'>
      <h3>{acc_type}: {acc_name}</h3>
      <p className='job-date'>{acc_desc}</p>
      </article>
    </div>
  </section>
    
)

}

Accomplishment.propTypes = {}

export default Accomplishment