import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Title from "./Title"
import { FaJoint } from "react-icons/fa"
import Job from "./Job-dora"
import SectionTitle from "./SectionTitle"
import { FaSuitcase } from "react-icons/fa"


export const Jobs = ({jobs,title}) => {
    return (
        
    <section className='section jobs'> 
    <span>
    <SectionTitle title='Work experience' name='work experience' icon={ <FaSuitcase size={35}/>}/>   
    <div className='jobs-center'>
        {jobs.map((job) =>{
            return <Job key={job.id} {...job} />
        })}

    </div>
    </span>
    </section>
    
    
    )
    
}

export default Jobs