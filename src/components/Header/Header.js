import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/create-log' className='nav-link'> Create Wordle Log </NavLink>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/logs' className='nav-link'> See My Words </NavLink>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/alllogs' className='nav-link'> See All Wordles </NavLink>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/change-password' className='nav-link'> Change Password </NavLink>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/sign-out' className='nav-link'> Sign Out </NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/sign-up' className='nav-link'> Sign Up </NavLink>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} to='/sign-in' className='nav-link'> Sign In </NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink style={{ fontSize: '15px', color: '#ffebcd', textDecoration: 'none' }} exact to='/' className='nav-link'> Home </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='nav-bar' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }}>Trackle</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav style={{ fontSize: '15px', textDecoration: 'none' }} className='ml-auto'>
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions} {user && (
          <span className='welcome'>  Wordle you going to do, {user.email}    </span>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
