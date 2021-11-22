import React, { useState } from 'react'
import product1 from '../../img/products/product-1.png'
import product2 from '../../img/products/keeb.jpg'
import product3 from '../../img/products/product-3.png'
import ProductList from '../../components/Product/productList'
import Pagination from '../../components/Pagination/pagination'

const Promotions = () => {
    const listOfProducts = [
        {
            image: product1,
            alt: 'logo',
            title: 'Zambumon Deskpad',
            price: '120.000',
        },
        {
            image: product2,
            alt: 'logo',
            title: 'RAMA WORKS® - M65-C',
            price: '120000',
        },
        {
            image: product3,
            alt: 'logo',
            title: 'Cables personalizados',
            price: '120000',
        },
        {
            image: product2,
            alt: 'logo',
            title: 'Cables personalizados',
            price: '120000',
        },
        {
            image: product3,
            alt: 'logo',
            title: 'Cables personalizados',
            price: '120000',
        },
        {
            image: product1,
            alt: 'logo',
            title: 'Cables personalizados',
            price: '120000',
        },
    ]
    const pageNum = 5
    const [indexPage, setIndexPage] = useState(1)
    const handleSelectIndex = (e) => setIndexPage(e)
    const handleForward = () => {
        if (indexPage < pageNum) {
            setIndexPage(indexPage + 1)
            return
        }

        setIndexPage(1)
    }

    const handleBackward = () => {
        if (indexPage <= 1) {
            setIndexPage(pageNum)
            return
        }
        setIndexPage(indexPage - 1)
    }

    return (
        <div
            className='arrivals
				w-full
				min-h-96
				border-solid
				border-black
				border-4
				static
				md:mt-16 lg:mt-4 2xl:my-0 rounded-3xl
				px-4 xl:px-16 pt-10
				flex items-center justify-start flex-col'>
            <h1 className='uppercase text-5xl font-bold w-full text-left mb-16'>
                Promociones
            </h1>
            <ProductList listOfProducts={listOfProducts} />
            <Pagination
                onClick={handleSelectIndex}
                indexSelected={indexPage}
                pageNum={pageNum}
                backward={handleBackward}
                forward={handleForward}
                customClass='h-16 overflow-hidden'
            />
        </div>
    )
}

export default Promotions
