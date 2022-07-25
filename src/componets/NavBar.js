import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import '../componets/Nav.css'
import context from 'react-bootstrap/esm/AccordionContext';
import { RiShoppingBasketFill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'
import { Image, ListGroup, Offcanvas } from 'react-bootstrap';
import { RiUserAddFill } from 'react-icons/ri';
import { RiUserFollowFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import arrow from '../assets/Img/arrow2.png'

const NavBarsHome = () => {
    const value = useContext(useContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='navLab'>
                <Navbar bg="light" expand="lg" >
                    <Container>
                        <Navbar.Brand href="/home" className='logo'>Big Basket</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >

                                <Nav.Link href="myorder">MyOrder</Nav.Link>
                                <Nav.Link href="#">
                                    About
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <div className='login'>
                                    <Nav.Link href="/login"><RiUserFollowFill /> login</Nav.Link>
                                </div>
                                <div className='signUplink'>
                                    <Nav.Link href="/signup"><RiUserAddFill /> signUp</Nav.Link>
                                </div>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="inputFindNow"
                                    aria-label="Search"
                                />
                                <Button className='searchBtn'>Search</Button>
                                <span className='linkAddtocard'>

                                    <a href='#' className='addToCard'> <RiShoppingBasketFill /></a>

                                    <div className='heartNav'>
                                        <a href='favorite'> <FaHeart /></a>
                                    </div>
                                </span>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='navMobile'>
                <div className='boxLogo'>
                    <div className='logoname'>
                        <h1 className='headingLogo'><a href='/home'>Big Basket</a></h1>
                    </div>
                    <div onClick={handleShow} className='toggleBtn'>
                        <AiOutlineMenu />
                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><a href='/home' className='navLogo'>Big Basket</a></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup variant="flush">
                                <Nav.Link href="myorder"><RiShoppingBasketFill className='icon' /> MyOrder</Nav.Link>
                                <Nav.Link href="#">
                                    <AiOutlineSetting className='icon' />   About
                                </Nav.Link>
                                <Nav.Link href="/login"><RiUserFollowFill className='icon' /> login</Nav.Link>
                                <Nav.Link href="/signup"><RiUserAddFill className='icon' /> signUp</Nav.Link>

                                <Nav.Link href="/favorite"><FaHeart className='icon' />MyFavorite</Nav.Link>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div >
            </div >

        </>
    )
}

export default NavBarsHome;