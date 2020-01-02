import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'



class portfolioRoute extends React.Component {
  render() {
    return  (
  <Layout>
    <div>
    <Sidebar {...this.props} />
    <div className="content">
    <div className="content__inner">
      <div className="page">
    <h1 className="page__title">About me</h1>
    <p>I am a communications enthusiast who loves good design, technology, and digital lifestyle. I strive to create products and services that help people. I live by the principle that age is just a number and learning is never-ending. I love to inspire and be inspired.</p>    
    <p> am obsessed about Darjeeling tea and often find myself brewing, tasting, and always seeking that perfect muscatel flavor. Check out my quick tutorial about brewing a perfect Darjeeling tea. I am also play guitar in my free time.</p>
    <h2>Technical Communication</h2>
    <p>
    With over seven years of experience writing and designing many types of documentation -- from technical documents through to marketing materials, and  web content -- I know exactly what it takes to simplify complex information into everyday language. I write and design documentation that is easy for the users to follow that enables them to quickly complete their task at hand. Whether that task is to complete a software installation, understand how a feature works, or gather information about a product.</p>
<p>
Good communication requires intelligent content that enables the audience to engage with your product. I can help your software development team write engaging content and design documentation that users can easily access and consume using their mobile phones, tablets, or computers.  With information available at anytime—either as an online help, a video tutorial, or a user guide—your customers can achieve their goals and enjoy your products without calling customer support.</p>
<p>
I can develop conceptual information, task oriented walkthrough, online help, instructional videos, user guides templates & training materials.
    </p>
    <h2>User Experience Design</h2>
    <p>I have a deep interest in understanding the different ways users discover and process information. </p>
    <p>
I keep myself updated with the latest in Information Architecture and UX design through various meetups, books, and online resources. I am proficient at using popular software tools to design illustrations, graphics, workflows, and manipulate images to simplify technical information and enhance users’ understanding of the material.</p>
    <h2>Web Development</h2>
    <p>In the ever-changing world of science and technology, I stay plugged-in to modern tools and technologies. I believe every technical communications professional must possess basic coding skills to produce content for various platforms. I continuously educate and train myself in various coding and programming languages. </p>
  </div>
  </div>
  </div>
  </div>
  </Layout>
)
    }
}

export default portfolioRoute
export const protfolioQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
        }
      }
    }
  }
`