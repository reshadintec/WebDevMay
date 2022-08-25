import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa'
import {AiFillHtml5,AiFillInstagram,} from 'react-icons/ai'
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link text-decoration-none">Homepage</Link>
                        <Link to={'/contact'} className="nav-link text-decoration-none">Contact</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <Link to={'/movies/adventure'} className="dropdown-item text-decoration-none">Adventure</Link>

                            {/* <NavDropdown.Divider /> */}
                            <Link to={'/movies/comedy'} className="dropdown-item text-decoration-none">Comedy</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <a className='nav-link'><FaTwitterSquare className='display-6 text-info'/></a>
                        <a className='nav-link'><AiFillHtml5 className='display-6 text-info'/></a>
                        <a className='nav-link'><FaInstagramSquare className='display-6 instagram'/></a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header