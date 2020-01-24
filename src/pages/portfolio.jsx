import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

class portfolioRoute extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">About me</h1>
                <p>
                  I am a writer, designer, and developer based in Ottawa, Canada. I enjoy
                  taking complex ideas from the brightest minds and presenting
                  them in the most elegant way possible. I live by the principle
                  that age is just a number and learning is never-ending. I love
                  to inspire and be inspired.
                </p>
                <h2>What I do best</h2>
                <p>
                  {/* I am filled with curiosity and often find myself
                  trying/learning new things of interest, anything to do with
                  technology, music, adventures, or art.  */}
                  I have particular set of skills. Skills I acquired over a long career in technical communication,
                  marketing, and design. Skills that make me indispensable for any
                  documentation, information design, and web-related projects that require immaculate communication, user
                  empathy and strong understanding of the UX/UI principles. If you hire me now that'll be the end of all your
                  documentation and UI/UX nightmares. If you are still not sure, read on to get convinced...
                </p>

                <h3>Technical Communication</h3>
                <p>
                  Good communication requires intelligent content that enables the
                  audience to engage with your product. I write and design documentation that is easy for the
                  users to follow, and enables them to quickly complete their
                  task at hand. I can help your engineering or scientific team write engaging content and design information
                  that users can easily access and consume, using their mobile
                  phones, tablets, or computers. With information available at
                  anytime&mdash;either as an online help, video tutorials, or
                  user guides&mdash;your customers can achieve their goals and
                  enjoy your products, while reducing the support calls. 
                </p>
                <h3>User Experience Design</h3>
                <p>
                  I have a deep interest in understanding the different ways
                  users discover and process information.{' '}
                </p>
                <p>
                  I keep myself updated with the latest in Information
                  Architecture and UX design through various meetups, books, and
                  online resources. I am proficient at using popular software
                  tools to design illustrations, graphics, workflows, and
                  manipulate images to simplify technical information and
                  enhance users’ understanding of the material.
                </p>
                <h3>Web Development</h3>
                <p>
                  In the ever-changing world of science and technology, I stay
                  plugged-in to modern tools and technologies. I believe every
                  technical communications professional must possess basic
                  coding skills to produce content for various platforms. I
                  continuously educate and train myself in various coding and
                  programming languages.{' '}
                </p>
                <h2>Random facts</h2>
                <p>
                  {' '}
                  I play guitar during my free time. If you have a minute,
                  listen to my guitar rants on instagram.
                </p>
                <p>
                  {' '}
                  I drink a lot of tea, Darjeeling tea to be precise. At home, I
                  am always brewing, tasting, and seeking that perfect muscatel
                  flavor. Check out my quick tutorial on brewing a perfect cup of
                  Darjeeling tea.{' '}
                </p>
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
