import React, { useEffect } from 'react'
import Nav from "../componets/NavBar";
import Sliders from "../componets/Slider";
import Categories from "../componets/Categories";
import Products from "../componets/Products";
import { Route, useNavigate } from 'react-router-dom';
import Login from './login';
function Home() {
    const nav = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userLogin");
        const foundUser = JSON.parse(loggedInUser);
        {
            if (foundUser) {
                nav('/')
            } else {
                nav('/login')
            }
        }
    }, [])

    return (
        <>


            <Nav />
            <Sliders />
            <Categories />
            <Products />
        </>
    )
}

export default Home;