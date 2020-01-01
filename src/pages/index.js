import React from "react"
import Header from '../components/header'
import { Link } from 'gatsby';

const Home = () => {
  return (
  <div>
    <Header title="Hello world!" />
    <Link to="/about">About</Link>
  </div>
  )
}

export default Home;
