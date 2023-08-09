import React from 'react'
import Image from 'next/image'
import logo from '../public/images/moiz.jpg'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='fixed w-full h-fit px-[6rem] z-10  mb-5'>
            <div className='flex flex-row justify-between items-center h-20 w-full px-6 ring-2 ring-[#E6E1C5] rounded-3xl mt-7 overflow-x-hidden backdrop-blur-sm'>
                <div>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            alt='logo'
                            height={50}
                            width={50}
                            className='cursor-pointer rounded-full '
                            priority
                        />
                    </Link>
                </div>

                <div className=' flex items-center gap-6 uppercase font-medium'>
                    <Link href={'/blogs'} className=' hover:text-[#b8de1e]'>
                        Blogs
                    </Link>
                    <text>Services</text>

                    <text>About</text>
                    <div className=' flex justify-center items-center py-2 px-3 bg-[#d7f553c9] rounded-lg'>
                        <text className='text-[#0E1421]'>Contact me</text>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar