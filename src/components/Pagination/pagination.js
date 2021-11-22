import React from 'react'
import './pagination.css'

const Pagination = ({
    customClass,
    indexSelected,
    onClick,
    forward,
    backward,
    pageNum,
}) => {
    const nums = () => {
        let nums = []

        for (let index = 0; index < pageNum; index++) {
            nums.push(index + 1)
        }

        return nums.map((e) => (
            <div
                className={
                    (indexSelected === e ? 'active' : '') +
                    ' ' +
                    'pag-item text-black mx-4 text-3xl font-medium'
                }
                key={e}>
                <button onClick={() => onClick(e)}> {e} </button>
            </div>
        ))
    }

    return (
        <div
            className={
                customClass +
                ' ' +
                'w-full flex items-center justify-center mb-16'
            }>
            <div className='nums-container flex items-center justify-center border-solid border-black border-2 w-auto max-w-full p-2  rounded-3xl'>
                <button
                    onClick={() => {
                        backward()
                    }}>
                    <svg
                        className='h-5 mx-4'
                        xmlns='http://www.w3.org/2000/svg'
                        height='13.714'
                        viewBox='0 0 16 13.714'>
                        <path
                            id='arrow_left'
                            d='M10.548,19.164,4.834,13.449a1.143,1.143,0,0,1,0-1.616l5.714-5.714a1.143,1.143,0,0,1,1.616,1.616L8.4,11.5H19.356a1.143,1.143,0,0,1,0,2.286H8.4l3.763,3.763a1.143,1.143,0,1,1-1.616,1.616Z'
                            transform='translate(-4.499 -5.784)'
                        />
                    </svg>
                </button>
                {nums()}
                <button
                    onClick={() => {
                        forward()
                    }}>
                    <svg
                        className='h-5 mx-4'
                        xmlns='http://www.w3.org/2000/svg'
                        height='13.714'
                        viewBox='0 0 16 13.714'>
                        <path
                            id='arrow_right'
                            d='M14.45,19.164l5.714-5.714a1.143,1.143,0,0,0,0-1.616L14.45,6.119a1.143,1.143,0,1,0-1.616,1.616L16.6,11.5H5.642a1.143,1.143,0,1,0,0,2.286H16.6l-3.763,3.763a1.143,1.143,0,1,0,1.616,1.616Z'
                            transform='translate(-4.499 -5.784)'
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

Pagination.defaultProps = {
    forward: () => {},
    backward: () => {},
    onClick: () => {},
}

export default Pagination
