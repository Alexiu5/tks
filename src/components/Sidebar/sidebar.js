import React, { useState } from 'react'
import './sidebar.css'
const SideBar = ({ customClass, handleSideBar, isSidebarOpen }) => {
    const [navItemSelected, setnavItemSelected] = useState(null)

    const handleItemSelected = (index) => {
        setnavItemSelected(index)
    }

    return (
        <div
            id='sidebar'
            className={
                (isSidebarOpen ? 'active' : 'unactive') +
                ' ' +
                customClass +
                ' ' +
                'hidden h-screen bg-white border-2 border-solid border-black w-1/6 left-0 top-0 flex-col'
            }>
            <div className='w-full h-12 flex justify-center pt-1.5 bg-white'>
                <img
                    className='h-full w-26 min-h-15'
                    src='logo/tks_logo_black.png'
                    alt='tks_logo'
                    onClick={handleSideBar}
                />
            </div>

            <ul className='sidebar-items w-full h-3/6  mt-14 pl-4'>
                {/* Promociones */}
                <li
                    className={
                        (navItemSelected === 0 ? 'active' : '') +
                        ' ' +
                        'sidebar-item p-2 relative z-10 mt-10'
                    }>
                    <button
                        className='flex flex-row justify-center items-center'
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            handleItemSelected(0)
                        }}>
                        <div className='bg-active'></div>
                        <div className='logo w-12 h-10 border-solid border-2 border-black z-20 flex items-center justify-center'>
                            <svg
                                className='sidebar-item-svg w-9 h-7'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 22.507 29.257'>
                                <path
                                    id='Icon_ionic-md-flame'
                                    data-name='Icon ionic-md-flame'
                                    d='M27.654,15.616l-.014.731c-.056.823-.555,3.052-1.554,3.846a9.833,9.833,0,0,0,.717-5.815C25.425,7.523,20.215,4.613,13.57,3.516l-1.209-.155c2.777,3.319,3.945,5.745,3.495,8.212a8.392,8.392,0,0,1-.984,2.222,10.8,10.8,0,0,0,.141-2.018,3.733,3.733,0,0,0-1.266-2.784,4.625,4.625,0,0,1-.64,3.354c-1.737,2.967-6,4.064-6.356,9.548v.267a10,10,0,0,0,4.83,8.789,6.093,6.093,0,0,1-.4-4.233,8.134,8.134,0,0,0,1.751,3.642,4.918,4.918,0,0,0,2.327,1.751,9.283,9.283,0,0,0,3.368.506c3.923,0,6.427-1.273,8.374-3.551s2.257-4.781,2.257-7.481A10.48,10.48,0,0,0,27.654,15.616Z'
                                    transform='translate(-6.75 -3.361)'
                                />
                            </svg>
                        </div>
                        <div className='text w-full h-12  flex items-center pl-2 text-xl font-medium z-20'>
                            Promociones
                        </div>
                    </button>
                </li>

                {/* Academia  */}
                <li
                    className={
                        (navItemSelected === 1 ? 'active' : '') +
                        ' ' +
                        'sidebar-item p-2 relative z-10 mt-7'
                    }>
                    <button
                        className='flex flex-row justify-center items-center'
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            handleItemSelected(1)
                        }}>
                        <div className='bg-active'></div>
                        <div className='logo w-12 h-10 border-solid border-2 border-black z-20 flex items-center justify-center'>
                            <svg
                                className='sidebar-item-svg w-9 h-6'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 23 26.286'>
                                <path
                                    id='Icon_awesome-book'
                                    data-name='Icon awesome-book'
                                    d='M23,18.482V1.232A1.229,1.229,0,0,0,21.768,0H4.929A4.93,4.93,0,0,0,0,4.929V21.357a4.93,4.93,0,0,0,4.929,4.929H21.768A1.229,1.229,0,0,0,23,25.054v-.821a1.242,1.242,0,0,0-.457-.96,11.449,11.449,0,0,1,0-3.835A1.223,1.223,0,0,0,23,18.482ZM6.571,6.879a.309.309,0,0,1,.308-.308H17.763a.309.309,0,0,1,.308.308V7.906a.309.309,0,0,1-.308.308H6.879a.309.309,0,0,1-.308-.308Zm0,3.286a.309.309,0,0,1,.308-.308H17.763a.309.309,0,0,1,.308.308v1.027a.309.309,0,0,1-.308.308H6.879a.309.309,0,0,1-.308-.308ZM19.581,23H4.929a1.643,1.643,0,1,1,0-3.286H19.581A18.482,18.482,0,0,0,19.581,23Z'
                                />
                            </svg>
                        </div>
                        <div className='text w-full h-12  flex items-center pl-2 text-xl font-medium z-20'>
                            Academia
                        </div>
                    </button>
                </li>

                {/* Quienes somos */}
                <li
                    className={
                        (navItemSelected === 2 ? 'active' : '') +
                        ' ' +
                        'sidebar-item p-2 relative z-10 mt-7'
                    }>
                    <button
                        className='flex flex-row justify-center items-center'
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            handleItemSelected(2)
                        }}>
                        <div className='bg-active'></div>
                        <div className='logo w-12 h-10 border-solid border-2 border-black z-20 flex items-center justify-center'>
                            <svg
                                className='sidebar-item-svg w-9 h-7'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 29.099'>
                                <path
                                    id='Icon_awesome-question'
                                    data-name='Icon awesome-question'
                                    d='M11.827,0A11.012,11.012,0,0,0,2.045,5.173a1.365,1.365,0,0,0,.294,1.868L4.791,8.9a1.364,1.364,0,0,0,1.89-.236c1.424-1.783,2.48-2.81,4.7-2.81,1.748,0,3.911,1.125,3.911,2.821,0,1.282-1.058,1.94-2.784,2.908C10.5,12.712,7.834,14.116,7.834,17.63v.556A1.364,1.364,0,0,0,9.2,19.551h4.119a1.364,1.364,0,0,0,1.364-1.364v-.328c0-2.436,7.119-2.537,7.119-9.129C21.8,3.766,16.651,0,11.827,0Zm-.57,21.225a3.937,3.937,0,1,0,3.937,3.937A3.941,3.941,0,0,0,11.257,21.225Z'
                                    transform='translate(-1.8)'
                                />
                            </svg>
                        </div>
                        <div className='text w-full h-12  flex items-center pl-2 text-xl font-medium z-20'>
                            ¿Quienes somos?
                        </div>
                    </button>
                </li>

                {/* Contactanos */}
                <li
                    className={
                        (navItemSelected === 3 ? 'active' : '') +
                        ' ' +
                        'sidebar-item p-2 relative z-10 mt-7'
                    }>
                    <button
                        className='flex flex-row justify-center items-center'
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            handleItemSelected(3)
                        }}>
                        <div className='bg-active'></div>
                        <div className='logo w-12 h-10 border-solid border-2 border-black z-20 flex items-center justify-center'>
                            <svg
                                className='sidebar-item-svg w-9 h-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 25.707 20.566'>
                                <path
                                    id='Icon_metro-mail'
                                    data-name='Icon metro-mail'
                                    d='M28.278,7.712H7.712a2.559,2.559,0,0,0-2.558,2.571L5.141,25.707a2.57,2.57,0,0,0,2.571,2.571H28.278a2.57,2.57,0,0,0,2.571-2.571V10.283a2.57,2.57,0,0,0-2.571-2.571Zm0,5.141L17.995,19.28,7.712,12.854V10.283L17.995,16.71l10.283-6.427v2.571Z'
                                    transform='translate(-5.141 -7.712)'
                                />
                            </svg>
                        </div>
                        <div className='text w-full h-12  flex items-center pl-2 text-xl font-medium z-20'>
                            Contactanos
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
