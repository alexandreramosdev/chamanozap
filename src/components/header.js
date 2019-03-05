import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"

const HeaderStyles = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
  color: white;
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Image /> {siteTitle}
      </h1>
    </Wrapper>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
