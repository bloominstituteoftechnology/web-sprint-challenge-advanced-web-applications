import React from 'react'
import '../styles/navigation.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Logo from '../assets/images/logo.png'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../redux/actions/authActions'
import {useHistory} from 'react-router-dom'
function Navigation() {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch(logoutUser())
    history.push('/')
  }

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home' className='mr-4'>
          <img src={Logo} alt='logo' className='nav-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/' className='mr-4'>
              Home
            </NavLink>

            <NavLink to='/bubbles'>Bubbles</NavLink>
          </Nav>

          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>

          <NavDropdown title='' id='basic-nav-dropdown' alignRight>
            <NavDropdown.Item href='#action/3.1' eventKey='1'>
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <p onClick={handleLogout}>LOGOUT</p>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
