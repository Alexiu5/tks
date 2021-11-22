import React from 'react'
import './product.css'
const Product = ({ image, alt, title, price }) => {
    return (
        <div
            className='producto
            w-full
            md:w-80
            h-80
            lg:h-96
            2xl:w-80
            m-5
            rounded-3xl
            border-solid
            border-black
            border-4
            py-2
            flex items-center  flex-col'>
            <div
                className='h-32 w-11/12 bg-center bg-cover bg-no-repeat border-solid rounded-2xl mt-5'
                style={{ backgroundImage: `url(${image})` }}></div>

            <div className='desc flex items-center flex-col mt-2  w-full '>
                <h2 className='md:text-2xl text-xl font-medium text-center'>
                    {title}
                </h2>
                <p className='md:text-2xl text-lg mt-2'>${price} COP</p>
                <div className='flex flex-row gap-1'>
                    <button
                        className='add-cart-btn
                        w-28
                        h-10
                        border-solid
                        border-black border-2
                        rounded-2xl text-white
                        font-bold tracking-wide
                        bg-black mt-8 capitalize'>
                        comprar
                    </button>
                    <button
                        className='view-more-btn
                        w-28
                        h-10
                        border-solid
                        border-black border-2
                        rounded-2xl text-black
                        font-bold tracking-wide
                        mt-8 capitalize'>
                        saber más
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
