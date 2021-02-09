import React from "react"
import Title from "./Title"
import Hobbie from "./Hobbie"
import { Link } from "gatsby"
import {FaLightbulb} from "react-icons/fa"
import SectionTitle from "./SectionTitle"

export const Hobbies = ({hobbies,title}) => {
  return (
    <section className='section'>
      <SectionTitle title='Hobbies' name='hobbies' icon={ <FaLightbulb size={35}/>}/>
      <div className='section-center blogs-center'>
        {hobbies.map((hobbie)=>{
          return <Hobbie key={hobbie.id} {...hobbie} />
        })}
      </div>
    </section>
  )
}
export default Hobbies
