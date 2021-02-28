import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import {Link} from 'react-scroll'
const Sidebar = () => {
  return (
    <div className="sidebar">
  <li><Link to="work experience" activeClass="active" spy={true} smooth={true} className='btn'>
              Work Experience
            </Link></li>
           <li> <Link to="education" spy={true} smooth={true} className='btn'>
              Education
            </Link></li>
            <li> <Link to="hobbies" spy={true} smooth={true} className='btn'>
              Hobbies
            </Link></li>
           <li> <Link to="\skills" spy={true} smooth={true} className='btn'>
              Skills
            </Link></li>
           
           <li> 
             <Link to='/Books' className='btn'>
              Books
            </Link></li>
            <li><Link to='/Baking' className='btn'>
              Baking
            </Link></li>
            </div>)
}

export default Sidebar
