import React from 'react'
import Button from '../Layout/common/button'
const ContactForm = () => {
    return (
        <div className='contact-form flex flex-col lg:p-10'>
            <div className='row flex flex-col lg:flex-row justify-start gap-5 mb-10'>
                <input
                    className='h-10 w-full lg:w-1/3 px-5 rounded-md text-black placeholder-black border-2 border-gray-500'
                    type='text'
                    name='name'
                    placeholder='Nombre'></input>
                <input
                    className='h-10 w-full lg:w-1/3 px-5 rounded-md text-black placeholder-black border-2 border-gray-500'
                    type='text'
                    name='email'
                    placeholder='Correo'></input>
                <input
                    className='h-10 w-full lg:w-1/3 px-5 rounded-md text-black placeholder-black border-2 border-gray-500'
                    type='text'
                    name='phone'
                    placeholder='Telefono'></input>
            </div>
            <div className='row flex flex-row  gap-5'>
                <textarea
                    className='h-52 w-full lg:h-56 p-5 rounded-md placeholder-black border-2 border-gray-500'
                    type='text'
                    name='name'
                    placeholder='Nombre'></textarea>
            </div>

            <div className='row flex- flex-row w-full'>
                <Button text='Enviar' customClass='mt-10' />
            </div>
        </div>
    )
}

export default ContactForm
