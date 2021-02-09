import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

const Job = ({id, company, date, position, desc}) => {
  return (
  <section className='section jobs' className='noselect'>
    <div className='jobs-center'>
        <article className='job-info'>
        <h3>{position}</h3>
        <h4>{company}</h4>
  <p className='job-date'>{date}</p>
  {
    desc.map((item)=>{
      return <div key={item.id} className='job-desc'>
        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
        <p>{item.name}</p>
      </div>
    })
  }
        </article>
        </div>
        </section>
)

}

Job.propTypes = {}

export default Job