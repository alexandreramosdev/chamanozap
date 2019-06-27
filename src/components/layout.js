import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import phone from '../images/phone.svg'
import bgwhats from '../images/background-whatsapp-7.jpg'

import Header from "./header"
import GlobalStyles from "../styles/globalStyles"

const Wrapper = styled.div`  
  padding-top: 0;
  min-height: 100vh;
  text-align: center;
 
  background:  url(${phone}) center/ 350px no-repeat, url(${bgwhats}) center / cover no-repeat !important;  
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Footer = styled.footer`
  margin-top: 14px;
`
const Main = styled.main`
 
 
`;

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <Main>{children}</Main>
          <Footer>
            © {new Date().getFullYear()}, Developed by{` `}
            <a href="https://github.com/Alexandreramosdev">Alexandre Ramos</a>
          </Footer>
        </Wrapper>
        <GlobalStyles />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
