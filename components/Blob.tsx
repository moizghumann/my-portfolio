import React from 'react'

const Blob = () => {
    return (
        <>
            <div className=' relative w-full'></div>
            <div className=' absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full filter blur-2xl opacity-30 animate-blob'></div>
            <div className=' absolute top-0 right-56 w-72 h-72 bg-yellow-300 rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-2000'></div>
            <div className=' absolute -bottom-16 left-24 w-72 h-72 bg-pink-300 rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-4000'></div>
        </>

    )
}

export default Blob