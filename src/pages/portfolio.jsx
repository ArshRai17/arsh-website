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
                  I am writer and a designer based in Ottawa, Canada. I enjoy
                  taking complex ideas from the brightest minds and presenting
                  them in the most elegant way possible. I live by the principle
                  that age is just a number and learning is never-ending. I love
                  to inspire and be inspired.
                </p>
                <svg
                  id="a68193b5-dc28-47e4-a46a-282d53b01437"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 475.13"
                >
                  <title>Arsh Rai - Writer, Designer, Developer</title>
                  <path
                    d="M242.29,0V235.26H480c0-65-28.13-123.83-70.4-165.62S308,1.53,242.29,0Z"
                    fill-rule="evenodd"
                  />
                  <path
                    d="M478.38,263.11H234.49L67.29,402.42c20.25,21.66,45.31,38.68,73.48,51.09,29.62,13.9,64.1,21.62,100,21.62,64.12,0,121.91-24.74,164.11-66.53a230.27,230.27,0,0,0,73.47-145.49Z"
                    fill-rule="evenodd"
                  />
                  <path
                    d="M214.24,243V1.53C156.33,7.72,104.72,34,67.29,74.28,25.06,116.07,0,173.34,0,236.8c0,29.42,4.69,57.27,15.68,83.58A225.89,225.89,0,0,0,48.5,380.76Z"
                    fill-rule="evenodd"
                  />
                  <text
                    transform="translate(46.26 191.15)"
                    font-size="45.46"
                    fill="#fff"
                    font-family="MyriadPro-Regular, Myriad Pro"
                    letter-spacing="-0.02em"
                  >
                    w
                    <tspan x="37.73" y="0" letter-spacing="0em">
                      r
                    </tspan>
                    <tspan x="52.78" y="0" letter-spacing="0em">
                      i
                    </tspan>
                    <tspan x="63.41" y="0" letter-spacing="-0.01em">
                      t
                    </tspan>
                    <tspan x="78.19" y="0" letter-spacing="0em">
                      er
                    </tspan>
                  </text>
                  <text
                    transform="translate(207.48 376.63)"
                    font-size="45.46"
                    fill="#fff"
                    font-family="MyriadPro-Regular, Myriad Pro"
                  >
                    <tspan letter-spacing="0em">d</tspan>
                    <tspan x="30.46" y="0" letter-spacing="0em">
                      esi
                    </tspan>
                    <tspan x="81.87" y="0" letter-spacing="-0.01em">
                      g
                    </tspan>
                    <tspan x="107.01" y="0">
                      ner
                    </tspan>
                  </text>
                  <text
                    transform="translate(265.39 155.15)"
                    font-size="45.46"
                    fill="#fff"
                    font-family="MyriadPro-Regular, Myriad Pro"
                  >
                    <tspan letter-spacing="-0.01em">c</tspan>
                    <tspan x="25.87" y="0">
                      oder
                    </tspan>
                  </text>
                </svg>
                <h2>Random facts</h2>
                <p>
                  {' '}
                  I play guitar during my free time. If you have a minute, listen to my
                  guitar rants on instagram.
                </p>
                <p>
                  {' '}
                  I  drink a lot of tea, Darjeeling tea to be precise. At home, I am always brewing, tasting, and seeking that perfect muscatel
                  flavor. Check out my tutorial on brewing a perfect cup of Darjeeling tea.{' '}
                </p>
                <h2>Technical Communication</h2>
                <p>
                  With over seven years of experience writing and designing many
                  types of documentation&mdash;from technical documents through to
                  marketing materials, and web content&mdash;I know exactly what it
                  takes to simplify complex information into everyday language.
                  I write and design documentation that is easy for the users to
                  follow, and enables them to quickly complete their task at
                  hand. Whether that task is to complete a software
                  installation, understand how a feature works, or gather
                  information about a product.
                </p>
                <p>
                  Good communication requires intelligent content that enables
                  the audience to engage with your product. I can help your
                  software development team write engaging content and design
                  documentation that users can easily access and consume using
                  their mobile phones, tablets, or computers. With information
                  available at anytim&mdash;either as an online help, video
                  tutorials, or user guides&mdash;your customers can achieve their
                  goals and enjoy your products without needing to call support to get started.
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
                  tools to design illustrations, graphics, workflows, and
                  manipulate images to simplify technical information and
                  enhance users’ understanding of the material.
                </p>
                <h2>Web Development</h2>
                <p>
                  In the ever-changing world of science and technology, I stay
                  plugged-in to modern tools and technologies. I believe every
                  technical communications professional must possess basic
                  coding skills to produce content for various platforms. I
                  continuously educate and train myself in various coding and
                  programming languages.{' '}
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
