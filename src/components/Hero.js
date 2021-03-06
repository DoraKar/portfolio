import React from "react"
import Image from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import {Link} from 'react-scroll'
// ...GatsbyImageSharpFluid

function scroll(val)
{
    //alert(document.getElementById(val));
    document.getElementById(val).click()
}
const query = graphql`
    {
      file(relativePath: {eq: "dora-img_50.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  
  

  return <header className='hero'>
    <div className='section-center hero-center'>
      <article className='hero-info'>
        <div>
          <div className='underline'>
            <h2>&nbsp;&nbsp;&nbsp;DORA</h2>
            <h2>&nbsp;KARDUM</h2>
            <Link to='/contact' className='btn'>
              Contact
            </Link>
            <br/>
            <h4>dora.kardum1@gmail.com</h4>
            <SocialLinks />
            
            <Link to="work experience" activeClass="active" spy={true} smooth={true} className='btn'>
              Work Experience
            </Link>
            <Link to="education" spy={true} smooth={true} className='btn'>
              Education
            </Link>
            
            <Link to="\skills" spy={true} smooth={true} className='btn'>
              Skills
            </Link>
            
            <button to="hobbies"  activeClass="active" spy={true} smooth={true} className='btn'>
              Hobbies
            </button>
            
             <Link to='/Books' className='btn'>
              Books
            </Link>
            <Link to='/Baking' className='btn'>
              Baking
            </Link>
          </div>
        </div>
      </article>
      <Image fluid = {fluid} className='hero-img' />
    </div>
    <div className='hero-hello'>
      <br /> 
      <h1>&nbsp;&nbsp;&nbsp;Hi!</h1>
      <br />
      <h2>I'm Dora, master of geodesy and geoinformatics, IT enthusiast and a nerd.
          I am looking to change careers so I'm currently working on my tech skills in front-end development and UI/UX desing.
<br/>
<br/>
          Feel free to contact me if you've also experienced changing careers so we can share some thoughts. :)
<br/>
<br/>
          Also if you are interested in the mentorship program for web development do not hesitate to contact me!
      </h2>
    </div>
  </header>
}

export default Hero
