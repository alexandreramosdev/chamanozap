import React from "react"
import styled, {createGlobalStyle} from "styled-components"

import InputFormik from "../components/Input"

import SEO from "../components/seo"

const Global = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #fbfbfb;
  }

  html,
  body,
  #___gatsby{
    min-height: 100vh;
  }

  body {
    font-family: sans-serif;
    font-weight: 200;
  }

  h1, h4 {
    font-weight: 400;
  }

  .inputStyle {
    padding: 10px !important;
    line-height: 2;
  }

`;

const Main = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 22px;
  }

  h1, h4 {
    font-weight: 400;
  }
`

const Wrapper = styled.div`
  max-width: 260px;
  margin: 16px auto 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  > h4 {
    margin-bottom: 8px;
  }
  > p {
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.6);
  }
`
const Footer = styled.footer`
  margin-top: 14px;
`

const IndexPage = () => (
  <Main>
    <SEO
      title="Chama no Zap"
      keywords={[`whatsapp`, `chama no zap`, `mensseger`]}
    />
    <h1>
      Inicie uma conversa no <br /> WhatsApp Agora{" "}
    </h1>
    <InputFormik />
    <Wrapper>
      <h4>Especialmente útil em situações como:</h4>
      <p>
        - Você precisa enviar uma mensagem para alguém, mas você não quer
        salvá-lo no contato?
      </p>
      <p>- Você quer começar uma conversa com você mesmo?</p>
    </Wrapper>
    <Footer>
      © {new Date().getFullYear()}, Developed by{` `}
     <a href="https://alexandreramos.netlify.com">Alexandre Ramos</a>
    </Footer>
    <Global />
  </Main>
)

export default IndexPage
