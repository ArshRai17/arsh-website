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
                {/* <h2>What I do best</h2>
                <p>
                  I have particular set of skills. Skills I acquired over a long career in technical communication,
                  marketing, and design. Skills that make me indispensable for any
                  documentation, information design, and web-related projects that require immaculate communication, user
                  empathy and strong understanding of the UX/UI principles. If you hire me now that'll be the end of all your
                  documentation and UI/UX nightmares. If you are still not sure, read on to get convinced...
                </p> */}

                <h2>Technical Communication</h2>
                <p>
                  Good communication requires intelligent content that enables the
                  audience to engage with your product. I write and design documentation that is easy for the
                  users to follow, and enables them to quickly complete their
                  task at hand. I can help your engineering or scientific teams write engaging content and design information
                  that users can easily access and consume, using their mobile
                  phones, tablets, or computers. With information available at
                  anytime&mdash;either as an online help, video tutorials, or
                  user guides&mdash;your customers can achieve their goals and
                  enjoy your products, while reducing the support calls and maxmizing product engagement. 
                </p>
                <h2>User Experience Design</h2>
                <p>
                  I have a deep interest in understanding the different ways
                  users discover and process information.{' '}
                </p>
                <p>
                  I keep myself updated with the latest in Information
                  Architecture and UX design through various meetups, books, and
                  online resources. I am proficient at using popular software
                  tools such as Adobe XD, InVision, PhotoShop, and Illustrator to create lo-fi to hi-fi prototypes. While web-related designs are my forte, I am equally competent with mobile UX/UI and UI copy. Checkout my portfolio.
                </p>
                <h2>Coding</h2>
                <p>
                  In the ever-changing world of science and technology, I stay
                  plugged-in to modern tools and technologies. I believe every
                  technical communicator and designer must possess coding skills to produce content or design UI for various platforms. I
                  continuously educate and train myself in various coding and
                  programming languages. I recently completed Ian Steel's Web Developer Bootcamp and I am in the process of completing Python. I also self-learn and try new web development techologies; at the moment I am into Gatsby and Netlify...JAMstack. As you see from my LinkedIn assessment, which was quite throurhg if you have tried it, I have passed quite a few LinkedIn assessments.{' '}
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
          linkedin
        }
      }
    }
  }
`
