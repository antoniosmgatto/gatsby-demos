import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => {
  const { to, children } = props
  return (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>{ children } </Link>
  </li>
)}

export default ({ children }) => (
  <div style={{ margin: '3rem auto', padding: '0 1rem', maxWidth: 650}}>
    <header style={{ marginBotton: '1.5rem' }}>
      <Link styles={{ textShadow: 'none', backgroundImage: 'none'  }} to='/'>
        <h3 style={{ display: 'inline' }}>MyDemoSite</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    { children }
  </div>
)

