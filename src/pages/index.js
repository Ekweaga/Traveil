import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Trips from "../components/trips"
import Testony from "../components/testony"
import Stats from "../components/Stats"
import Email from "../components/email"



const IndexPage = () => (
  <Layout>

    <Hero />
    <Trips/>
    <Testony/>
    <Stats />
    <Email />

  </Layout>
)

export default IndexPage
