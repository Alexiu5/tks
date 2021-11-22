import React from 'react'
import ContactForm from '../../components/ContactForm/contactForm'

// images
import hero_transparent from '../../img/hero_transparent.png'
import logo from '../../img/tks_logo_black.png'
import product1 from '../../img/products/product-1.png'
import product2 from '../../img/products/keeb.jpg'
import product3 from '../../img/products/product-3.png'
import keyboardMilk from '../../img/keyboard-milk.jpg'
import kara from '../../img/kara.jpg'

import './home.css'
import ProductList from '../../components/Product/productList'

const Home = () => {
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

    return (
        <>
            <div className='w-full h-full flex flex-col items-center lg:px-12 px-6 '>
                {/* Hero banner */}
                <div
                    className='
                        w-full
                        h-52
                        md:h-72
                        bg-gray-400
                        rounded-3xl
                        relative
                        mb-20
                        2xl:mb-52
                        hero-background 
                    '>
                    <img
                        src={hero_transparent}
                        alt='keyboard'
                        className='absolute top-0 right-0 rounded-r-3xl transform scale-100   '
                    />
                    <div className='logo-container absolute left-10 lg:left-40 lg:top-10 top-4 flex items-center flex-col'>
                        <img
                            src={logo}
                            alt='tks logo'
                            className='xl:h-36 h-14'
                        />
                        <h2 className='font-medium text-2xl md:text-3xl mt-5 tracking-wide'>
                            The Keeb Store
                        </h2>
                    </div>
                    <div
                        className='
                        social-media-container
                        w-full h-1/6
                        absolute
                        left-0 top-64
                        hidden xl:flex
                        items-center justify-start px-52
                        '>
                        {/* Twitter */}
                        <div className='social-icon'>
                            <a href='#' className='no-underline'>
                                <svg
                                    className='h-16 w-16 mx-2 social-svg '
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <path
                                        id='twitter_svg'
                                        d='M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0ZM209.152,391.04c113.536,0,175.616-94.08,175.616-175.616,0-2.688,0-5.376-.128-7.936a126.449,126.449,0,0,0,30.848-32,125.275,125.275,0,0,1-35.456,9.728,61.687,61.687,0,0,0,27.136-34.176A124.989,124.989,0,0,1,368,166.016a61.757,61.757,0,0,0-106.752,42.24,56.562,56.562,0,0,0,1.664,14.08A175.1,175.1,0,0,1,135.68,157.824a61.692,61.692,0,0,0,19.2,82.3,60.631,60.631,0,0,1-27.9-7.68v.768a61.789,61.789,0,0,0,49.536,60.544,61.529,61.529,0,0,1-16.256,2.176,58.929,58.929,0,0,1-11.648-1.152,61.628,61.628,0,0,0,57.6,42.88,124.072,124.072,0,0,1-76.672,26.368,112.238,112.238,0,0,1-14.72-.9A171.963,171.963,0,0,0,209.152,391.04Z'
                                        fill-rule='evenodd'
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Facebook */}
                        <div className='social-icon'>
                            <a href='#' className='no-underline'>
                                <svg
                                    className='h-16 w-16 mx-2 social-svg'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 508.89'>
                                    <path
                                        id='facebook-icon'
                                        d='M512,257.555c0-141.385-114.615-256-256-256S0,116.17,0,257.555C0,385.332,93.616,491.24,216,510.445V331.555H151v-74h65v-56.4c0-64.16,38.219-99.6,96.7-99.6,28.009,0,57.3,5,57.3,5v63H337.719c-31.8,0-41.719,19.733-41.719,39.978v48.022h71l-11.35,74H296v178.89C418.385,491.24,512,385.332,512,257.555Z'
                                        transform='translate(0 -1.555)'
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className='social-icon'>
                            <a href='#' className='no-underline'>
                                <svg
                                    className='h-16 w-16 mx-2 social-svg'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <g
                                        id='instagram_icon'
                                        transform='translate(-3.7 -5.2)'>
                                        <circle
                                            id='Ellipse_5'
                                            data-name='Ellipse 5'
                                            cx='37.31'
                                            cy='37.31'
                                            r='37.31'
                                            transform='translate(220.221 226.055)'
                                        />
                                        <path
                                            id='Path_8'
                                            data-name='Path 8'
                                            d='M155.517,19.2H62.242c-13.567,0-25.439,4.24-33.07,11.871S17.3,50.574,17.3,64.142v93.275c0,13.567,4.24,25.439,12.719,33.918,8.48,7.632,19.5,11.871,33.07,11.871h92.427c13.567,0,25.439-4.24,33.07-11.871,8.48-7.632,12.719-19.5,12.719-33.07V64.99c0-13.567-4.24-24.591-11.871-33.07C180.956,23.44,169.932,19.2,155.517,19.2ZM108.879,168.44a57.661,57.661,0,1,1,0-115.322c31.374,0,58.509,25.439,58.509,57.661S141.1,168.44,108.879,168.44Zm60.2-104.3a13.567,13.567,0,1,1,13.567-13.567A13.394,13.394,0,0,1,169.084,64.142Z'
                                            transform='translate(148.604 152.979)'
                                        />
                                        <path
                                            id='Path_9'
                                            data-name='Path 9'
                                            d='M259.7,5.2c-141.526,0-256,114.472-256,256s114.47,256,256,256,256-114.471,256-256C516.734,119.672,401.223,5.2,259.7,5.2ZM396.02,321.558c0,23.935-8.325,44.748-22.894,59.317s-35.382,21.854-58.276,21.854H201.421c-22.894,0-43.707-7.285-58.276-21.854-15.61-14.569-22.894-35.382-22.894-59.317V207.086c0-47.87,32.26-81.171,81.17-81.171h114.47c23.935,0,43.707,8.325,58.276,22.894s21.853,34.341,21.853,58.276V321.558Z'
                                            transform='translate(0 0)'
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* New Arrivals */}
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
                        Recien llegados
                    </h1>

                    <ProductList listOfProducts={listOfProducts} />

                    <button
                        className='
						relative
						bottom-16
						view-more-btn
                        w-32
                        h-12
						lg:text-lg
                        border-solid
                        border-black border-2
                        rounded-2xl text-black
                        font-bold tracking-wide
                        mt-8 capitalize'>
                        ver más
                    </button>
                </div>

                {/* Who are we? */}
                <div
                    className='container w-full
                        min-h-screen
                        overflow-hidden
                        relative rounded-3xl
                        z-0'>
                    <div className='shadow absolute w-full h-full bg-gray-800 left-0 top-16 z-0 opacity-10 rounded-3xl'></div>
                    <div
                        className='somos
                            my-10
                            text-white
                            py-4
                            px-4
                            mt-16
                            xl:mt-32
                            flex
                            flex-col
                            z-40
                            transform
                            scale-95
                            xl:scale-90'>
                        <h2 className='title w-full h-16 font-bold text-3xl lg:text-5xl text-black uppercase text-center md:mb-16'>
                            ¿Quienes somos?
                        </h2>

                        <div className='flex gap-5 flex-col-reverse xl:flex-row justify-center items-center pb-24 rounded-3xl'>
                            <div
                                className='text-container  rounded-3xl  w-full'
                                style={{ minWidth: '40vw', minHeight: '50vh' }}>
                                <div className='w-full h-full text-justify p-5 2xl:px-20 leading-8 text-2xl font-light text-black'>
                                    <p>
                                        Somos una tienda online, especializada
                                        en artículos para teclados mecánicos.
                                    </p>
                                    <br />
                                    <p>
                                        Nos consideramos como entusiastas de
                                        este hobby y queremos que más personas
                                        se interesen también.
                                    </p>
                                    <br />
                                    <p>
                                        Es por eso que creamos esta tienda, no
                                        solo para vender nuestros productos,
                                        sino que también, para dar a conocer lo
                                        interesante que puede ser construir un
                                        teclado tan único como tú.
                                    </p>
                                    <br />
                                    <p>
                                        Brindamos asesorías e información
                                        atreves de nuestras redes sociales y en
                                        esta pagina web en la sección de
                                        Academia. Te recomendamos que le eches
                                        una mirada si no entiendes mucho de este
                                        mundo, quizás te termine gustando tanto
                                        como a nosotros.
                                    </p>
                                </div>
                            </div>
                            <div
                                className='image-container 
                                rounded-3xl bg-center bg-no-repeat bg-cover filter brightness-90 contrast-80 opacity-100 w-full'
                                style={{
                                    minWidth: '40vw',
                                    minHeight: '50vh',
                                    backgroundImage: `url(${keyboardMilk})`,
                                }}></div>
                            <button
                                className='
								absolute
								bottom-0
								view-more-btn
								w-32
								h-12
								lg:text-lg
								border-solid
								border-black border-2
								rounded-2xl text-black
								font-bold tracking-wide
								capitalize
								'>
                                ver más
                            </button>
                        </div>
                    </div>
                </div>
                {/* Contacts us */}
                <div className='contactanos w-full lg:min-h-96  mb-5 mt-16'>
                    <div className='w-full min-h-full bg-gray-100 rounded-3xl p-16'>
                        <h2 className='title uppercase text-3xl lg:text-5xl font-bold w-full text-left mb-16 text-black'>
                            Contactanos
                        </h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
