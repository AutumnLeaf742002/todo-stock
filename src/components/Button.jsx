import React from 'react'

export const ButtonLogin = ({ text }) => {
    return (
        <button className='w-full h-12 bg-gray-300 hover:bg-gray-400 text-lg mt-auto rounded-md'>
            { text }
        </button>
    )
}