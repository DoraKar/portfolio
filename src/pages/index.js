import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import StyledBackgroundSection from "../components/BackgroundImage"
import Services from "../components/Services"
import Jobs from "../components/Jobs-dora"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Educations from "../components/Educations"
import Accomplishments from "../components/Accomplishments"
import Hobbies from "../components/Hobbies"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
    allStrapiJobs: {nodes: jobs },
    allStrapiEducations: {nodes: educations },
    allStrapiAccomplishments: {nodes: accomplishments },
    allStrapiHobbies: {nodes: hobbies },
  } = data

  return (
    <Layout className='noselect'>
          <StyledBackgroundSection />
          <Hero />
          <Sidebar/>
          <Jobs jobs={jobs}/>
          <Educations educations={educations}/>
          <Accomplishments accomplishments={accomplishments}/>
          <Projects projects={projects} title="featured projects" showLink />*/
          <Blogs blogs={blogs} title="Blogs" showLink />
          <Hobbies hobbies={hobbies}/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiJobs(sort: {fields: strapiId, order: DESC}
      ) {
          nodes {
            company
            date
            position
            desc {
              id
              name
            }
          }
      }
    allStrapiEducations(sort: {fields: id, order: DESC}) {
      nodes {
        id
        school
        duration
      }
    }
    allStrapiAccomplishments(sort: {fields: id, order: ASC}) {
      nodes {
        id
        acc_type
        acc_name
        acc_desc
      }
    }
    allStrapiHobbies {
      nodes {
        id
        image_desc {
          childImageSharp {
            fluid(quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
        hobbie_name
      }
    }
  }
`
