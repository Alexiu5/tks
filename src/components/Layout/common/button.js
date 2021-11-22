import React from 'react'
import './common.css'
const Button = ({ customClass, text }) => {
    return (
        <button
            className={
                customClass +
                ' ' +
                `
                    button
                    w-32
                    h-12
                    border-solid
                    border-black border-2
                    rounded-2xl text-black
                    font-bold tracking-wide
                    capitalize
                `
            }>
            {text}
        </button>
    )
}

export default Button
