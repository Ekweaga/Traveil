import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Trips from "../components/trips"



const IndexPage = () => (
  <Layout>

    <Hero />
    <Trips/>

  </Layout>
)

export default IndexPage
