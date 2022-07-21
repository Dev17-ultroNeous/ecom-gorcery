import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import '../componets/Nav.css'
import context from 'react-bootstrap/esm/AccordionContext';
import { RiShoppingBasketFill } from 'react-icons/ri'
const NavBarsHome = () => {
    const value = useContext(useContext);

    return (
        <>
            <div className='navLab'>
                <Navbar bg="light" expand="lg" >
                    <Container>
                        <Navbar.Brand href="/home" className='logo'>Food Grocery</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link href="myorder">MyOrder</Nav.Link>
                                <Nav.Link href="#">
                                    FAQ
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <div className='login'>
                                    <Nav.Link href="/login">login</Nav.Link>
                                </div>
                                <div className='signUplink'>
                                    <Nav.Link href="/signup">signUp</Nav.Link>
                                </div>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="inputFindNow"
                                    aria-label="Search"
                                />
                                <Button className='searchBtn'>Search</Button>
                                <a href='#' className='linkAddtocard'>
                                    <div className='addToCard'>
                                        <RiShoppingBasketFill />
                                    </div>
                                </a>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavBarsHome;