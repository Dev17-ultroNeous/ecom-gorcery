import React from 'react'
import { productsData, fruitData } from "../utils/Data";

import ProductSection from './ProductSection';

function Products() {
    return (
        <>
            <ProductSection list={productsData} name='vegitable' />
            <ProductSection list={fruitData} name='Fruits' />
        </>

    )
}

export default Products