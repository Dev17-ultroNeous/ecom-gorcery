import React from 'react'
import Nav from "../componets/NavBar";
import Sliders from "../componets/Slider";
import Categories from "../componets/Categories";
import Products from "../componets/Products";
function Home() {
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