import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"

import InputFormik from "../components/Input"
import SEO from "../components/seo"

import ShareIcon from '../images/share-button.svg';

const Global = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  html,
  body,
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
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

  .react-phone-number-input__icon {
    width: 36px !important;
    height: 27px !important;
    border: none !important;
  }
`;

const Main = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.8);
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
    font-size: 15px;
  }
  > p {
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  }
`
const Footer = styled.footer`
  margin-top: 14px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`

const Button = styled.button`
  border: none;
  margin-top: 20px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;

  > img {
    width: 10px;
    margin-left: 5px;
  }
`
const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (navigator.share !== undefined) {
      setIsMobile(true)
    }
  },[])

  const share = () => {
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'Chamar no Zap',
        text: 'App Web chamar no zap',
        url: 'http://chamanozap.netlify.com',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } 
  }
  return(
  <Main>
    <SEO/>
    <h1>Chamar no WhatsApp agora!</h1>
    <InputFormik />
    <Wrapper>
      <h4>Especialmente útil em situação como:</h4>
      <p>- Você precisa enviar uma mensagem para alguém, mas você não quer
        salvá-lo na agenda de contato!
      </p>
    </Wrapper>
    <Footer>
      © {new Date().getFullYear()}, Developed by{` `}
     <a href="https://alexandreramos.netlify.com">Alexandre Ramos</a>
    </Footer>
    {isMobile && <Button onClick={share}>share <img src={ShareIcon} /></Button>}
    <Global />
  </Main>
)}

export default IndexPage
