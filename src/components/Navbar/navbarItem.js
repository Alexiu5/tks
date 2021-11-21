import React from 'react'

const NavBarItem = ({ title }) => {
    return (
        <li className='btn w-10 border-solid border-2 border-blue-500'>
            {title}
        </li>
    )
}

export default NavBarItem
