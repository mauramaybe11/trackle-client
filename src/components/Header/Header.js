import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/create-log' className='nav-link'>Create Log</NavLink>
    <NavLink to='/logs' className='nav-link'>See My Wordles</NavLink>
    <NavLink to='/alllogs' className='nav-link'>See Everyone Wordles</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink style={{ fontSize: '20px', color: '#ffebcd', textDecoration: 'none' }} exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='nav-bar' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ fontSize: '30px', color: '#ffebcd', textDecoration: 'none' }}>Trackle</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome to Wordle Trackle, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
