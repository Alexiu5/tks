import React from 'react'

const Footer = ({ customClass }) => {
    return (
        <footer
            className={
                customClass +
                ' ' +
                'fixed w-screen h-16 bg-black flex justify-between items-center lg:px-20 px-8 font-medium'
            }>
            <span className='copy text-white flex flex-row items-center'>
                Copyright{' '}
                <svg
                    className='h-9 w-7 mx-3'
                    xmlns='http://www.w3.org/2000/svg'
                    width='34.875'
                    height='34.875'
                    viewBox='0 0 34.875 34.875'>
                    <path
                        id='Icon_awesome-copyright'
                        data-name='Icon awesome-copyright'
                        d='M18,.563A17.438,17.438,0,1,0,35.438,18,17.437,17.437,0,0,0,18,.563Zm8.236,24.381a10.5,10.5,0,0,1-7.724,3.215A9.9,9.9,0,0,1,8.353,17.924,9.9,9.9,0,0,1,18.461,7.841a10.126,10.126,0,0,1,7.272,2.735A.844.844,0,0,1,25.82,11.6l-1.574,2.437a.844.844,0,0,1-1.282.161,7.153,7.153,0,0,0-4.351-1.679,5.032,5.032,0,0,0-5.2,5.35c0,2.785,1.794,5.6,5.223,5.6a6.894,6.894,0,0,0,4.609-2.013.844.844,0,0,1,1.3.074L26.275,23.9a.844.844,0,0,1-.039,1.045Z'
                        transform='translate(-0.563 -0.563)'
                        fill='#fff'
                    />
                </svg>
                2021
            </span>
            <span className='page text-white'>TheKeebStore.com&reg;</span>
        </footer>
    )
}

export default Footer
