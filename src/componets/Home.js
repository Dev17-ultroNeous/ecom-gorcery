import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../componets/Home.css'

const Home = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#" className='logo'>Food Gorcery</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">MyOrder</Nav.Link>
                        <Nav.Link href="#">
                            FAQ
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <div className='login'>
                            <Nav.Link href="#action2">login</Nav.Link>
                        </div>
                        <div className='signUp'>
                            <Nav.Link href="#action2">signUp</Nav.Link>
                        </div>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="inputFindNow"
                            aria-label="Search"
                        />
                        <Button>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Home;