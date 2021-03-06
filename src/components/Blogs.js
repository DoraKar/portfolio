import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import {FaLightbulb} from "react-icons/fa"
import SectionTitle from "./SectionTitle"

export const Blogs = ({blogs,title,showLink}) => {
  return (
    <section className='section'>
      <SectionTitle title='Hobbies' name='hobbies' icon={ <FaLightbulb size={35}/>}/>
      <div className='section-center blogs-center'>
        {blogs.map((blog)=>{
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to='/blog' className='btn center-btn'>
        blog
        </Link>)}
    </section>
  )
}
export default Blogs
