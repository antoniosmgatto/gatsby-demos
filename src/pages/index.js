import React from "react"
import Header from '../components/header'
import { Link } from 'gatsby';

const Home = () => {
  return (
  <div>
    <Header title="Hello world!" />
    <p>
      What do i like to do? Lots of course but definitely enjoy building websites.
    </p>
    <Link to="/about">About</Link>
  </div>
  )
}

export default Home;
