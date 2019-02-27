import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./header"
import GlobalStyles from "../styles/globalStyles"
import "semantic-ui-css/semantic.min.css"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  height: 100%;
  text-align: center;
`

const Footer = styled.footer`
  margin-top: 14px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Developed by{` `}
            <a href="https://github.com/AlexandreRStos">Alexandre Ramos</a>
          </Footer>
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
