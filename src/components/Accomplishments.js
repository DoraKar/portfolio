import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Title from "./Title"
import { FaJoint } from "react-icons/fa"
import Accomplishment from "./Accomplishment"
import { FaMedal } from "react-icons/fa"
import SectionTitle from "./SectionTitle"

export const Accomplishments = ({accomplishments,title}) => {
    return ( 
    <section className='section jobs'>
     <span className='line'>  
    <SectionTitle title='Accomplishment' name='accomplishment' icon={ <FaMedal size={35}/>}/>
    <div className='jobs-center'>
        {accomplishments.map((accomplishment) =>{
            return <Accomplishment key={accomplishment.id} {...accomplishment} />
        })}

    </div>
    </span> 
    </section>
    
    
    )
    
}

export default Accomplishments