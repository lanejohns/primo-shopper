import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Container, Nav, Row, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <header>
            <Navbar bg="dark" variant="dark "expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand >CommercePro</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onCLick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ): (
                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                        )}

                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header
