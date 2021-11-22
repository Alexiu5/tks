import React, { useState } from 'react'
import './navbar.css'

const Navbar = ({ customClass }) => {
    const [isSearhActive, setIsSearchActive] = useState(false)

    const handleSearchClick = (e) => {
        e.preventDefault()

        setIsSearchActive(!isSearhActive)
    }

    return (
        <div
            id='navbar'
            className={
                customClass +
                ' ' +
                'fixed w-screen flex justify-between items-center mx-auto px-8 md:px-14 lg:px-4 bg-gray-400 z-40'
            }>
            <ul className='w-full flex justify-end items-center px-0 h-12 '>
                <li className='search'>
                    <div
                        className={
                            (!isSearhActive ? 'active' : '') +
                            '' +
                            'search-input active mr-2 '
                        }></div>
                    <div className='list-item'>
                        <button
                            onClick={
                                // eslint-disable-next-line no-restricted-globals
                                () => handleSearchClick(event)
                            }>
                            <svg
                                className='w-9 h-7 relative left-1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 33.12 33.12'>
                                <path
                                    className='shadow'
                                    id='Icon_map-search'
                                    data-name='Icon map-search'
                                    d='M25.675,21.268a13.1,13.1,0,1,0-4.409,4.406l8.887,8.886,4.407-4.409ZM14.508,22.594a8.08,8.08,0,1,1,8.084-8.076,8.093,8.093,0,0,1-8.084,8.076Z'
                                    transform='translate(-1.44 -1.44)'
                                />
                            </svg>
                        </button>
                    </div>
                </li>

                <li className='list-item'>
                    <svg
                        className='item-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 30 26.667'>
                        <path
                            className='shadow'
                            id='Icon_awesome-shopping-cart'
                            data-name='Icon awesome-shopping-cart'
                            d='M27.506,15.694,29.968,4.86a1.25,1.25,0,0,0-1.219-1.527H8.292L7.815,1A1.25,1.25,0,0,0,6.59,0H1.25A1.25,1.25,0,0,0,0,1.25v.833a1.25,1.25,0,0,0,1.25,1.25H4.89L8.548,21.221a2.917,2.917,0,1,0,3.492.446H22.96a2.916,2.916,0,1,0,3.312-.542l.287-1.264a1.25,1.25,0,0,0-1.219-1.527H11.36l-.341-1.667H26.287A1.25,1.25,0,0,0,27.506,15.694Z'
                        />
                    </svg>
                </li>

                <li className='list-item'>
                    <svg
                        className='item-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 29.25'>
                        <path
                            className='shadow'
                            id='Icon_material-notifications'
                            data-name='Icon material-notifications'
                            d='M18,33a3.009,3.009,0,0,0,3-3H15A3,3,0,0,0,18,33Zm9-9V16.5c0-4.6-2.46-8.46-6.75-9.48V6a2.25,2.25,0,0,0-4.5,0V7.02C11.445,8.04,9,11.88,9,16.5V24L6,27v1.5H30V27Z'
                            transform='translate(-6 -3.75)'
                        />
                    </svg>
                </li>

                <li className='list-item'>
                    <svg
                        className='item-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 31 27.9'>
                        <path
                            className='shadow'
                            id='Icon_open-person'
                            data-name='Icon open-person'
                            d='M15.5,0C11.237,0,7.75,3.906,7.75,8.719s3.487,8.719,7.75,8.719,7.75-3.906,7.75-8.719S19.763,0,15.5,0ZM7.4,17.438C3.294,17.612,0,20.646,0,24.412V27.9H31V24.412c0-3.767-3.255-6.8-7.4-6.975a11.389,11.389,0,0,1-8.1,3.487A11.389,11.389,0,0,1,7.4,17.438Z'
                        />
                    </svg>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
