import React from 'react'
import { productsData, fruitData, spiceData } from "../utils/Data";

import ProductSection from './ProductSection';

function Products() {
    return (
        <>
            <ProductSection list={productsData} name='vegitable' link='/allvegitable' />
            <ProductSection list={fruitData} name='Fruits' link='/allfruits' />
            <ProductSection list={spiceData} name='Snacks' link='/allsnacks' />
        </>

    )
}

export default Products