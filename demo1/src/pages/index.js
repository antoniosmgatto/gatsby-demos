import React from "react"
import { Header, Layout } from '../components'
import { Link } from 'gatsby';

const Home = () => {
  return (
  <Layout>
    <Header title="Hello world!" />
    <p>
      What do i like to do? Lots of course but definitely enjoy building websites.
    </p>
  </Layout>
  )
}

export default Home;
