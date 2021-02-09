import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Title from "./Title"
import { FaJoint } from "react-icons/fa"
import Education from "./Education"
import { FaUniversity } from "react-icons/fa"
import SectionTitle from "./SectionTitle"

export const Educations = ({educations,title}) => {
    return ( 
    <section className='section jobs'>
     <span className='line'>  
    <SectionTitle title='Education' name='education' icon={ <FaUniversity size={35}/>}/>
    <div className='jobs-center' >
        {educations.map((education) =>{
            return <Education key={education.id} {...education} />
        })}

    </div>
    </span> 
    </section>
    
    
    )
    
}

export default Educations