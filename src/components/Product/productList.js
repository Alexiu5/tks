import React from 'react'
import Product from './product'

const ProductList = ({ listOfProducts }) => {
    const products = listOfProducts.map((e, index) => (
        <Product {...e} key={index} />
    ))

    return (
        <div className='products-container  h-full flex flex-row flex-wrap items-center justify-center mb-16'>
            {products}
        </div>
    )
}

export default ProductList
