import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import InputFormik from "../components/Input"

import SEO from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <SEO
      title="Chama no Zap"
      keywords={[`whatsapp`, `chama no zap`, `mensseger`]}
    />
    <h3>
      Inicie uma conversa no <br /> WhatsApp Agora{" "}
    </h3>
    <InputFormik />
    <Wrapper>
      <h4>Especialmente útil em situações como:</h4>
      <p>
        - Você precisa enviar uma mensagem para alguém, mas você não quer
        salvá-lo no contato?
      </p>
      <p>- Você quer começar uma conversa com você mesmo?</p>
    </Wrapper>
  </Layout>
)

export default IndexPage
