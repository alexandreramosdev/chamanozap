import React from "react"

import Layout from "../components/layout"
import InputFormik from "../components/Input"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>
      Inicie uma conversa no
      <br /> WhatsApp Agora
    </h3>
    <InputFormik />
  </Layout>
)

export default IndexPage
