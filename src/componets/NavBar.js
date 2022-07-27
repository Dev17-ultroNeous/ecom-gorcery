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
import { Link } from 'react-router-dom';
import MyOrder from '../page/myOrder';
import Login from '../page/login';
import { IoCartSharp } from 'react-icons/io5'

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
                        <div className='linkHome'>
                            <Link to="/" className='logo'>Big Basket</Link>

                            <Link to='/myorder'>MyOrder</Link>
                            <Link to={'#'}>
                                About
                            </Link>
                        </div>


                        <Form className="linkUser">
                            <div className='login'>
                                <Link to='/login'><RiUserFollowFill /> login</Link>
                            </div>
                            <div className='signUplink'>
                                <Link to='/signup'><RiUserAddFill /> signUp</Link>
                            </div>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="inputFindNow"
                                aria-label="Search"
                            />
                            <Button className='searchBtn'>Search</Button>
                            <span className='linkAddtocard'>

                                <Link to='/addtocart' className='addToCardLink'> <IoCartSharp /></Link>

                                <div className='heartNav'>
                                    <Link to='/favorite' className='heartLink'> <FaHeart /></Link>

                                </div>
                            </span>

                        </Form>

                    </Container>
                </Navbar>
            </div>
            <div className='navMobile'>
                <div className='boxLogo'>
                    <div className='logoname'>
                        <h1 className='headingLogo'><Link to='/'>Big Basket</Link></h1>
                    </div>
                    <div onClick={handleShow} className='toggleBtn'>
                        <AiOutlineMenu />
                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><Link to='/' className='navLogo'>Big Basket</Link></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup className='linkMobile'>
                                <Link to="/myorder"><RiShoppingBasketFill className='icon' /> MyOrder</Link>
                                <Link to="#">
                                    <AiOutlineSetting className='icon' />   About
                                </Link>
                                <Link to="/login"><RiUserFollowFill className='icon' /> login</Link>
                                <Link to="/signup"><RiUserAddFill className='icon' /> signUp</Link>
                                <Link to="/favorite"><FaHeart className='icon' />MyFavorite</Link>
                                <Link to='/addtocart'> <IoCartSharp className='icon' />AddToCart</Link>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div >
            </div >

        </>
    )
}

export default NavBarsHome;