import React from 'react'
import Image from 'next/image'
import logo from '../public/images/ultimate_(1)-transformed.jpeg'
import Link from 'next/link'
import MobileNavButton from './MobileNavButton'

const NavBar = () => {
    return (
        <nav className='fixed w-full h-fit px-[6rem] xss:px-5 z-10 top-0  mb-5'>
            <div className='flex flex-row justify-between items-center h-20 w-full px-6 xss:px-4 xss:py-3 
            xss:h-fit ring-2 ring-[#E6E1C5] rounded-3xl xss:rounded-2xl mt-7 overflow-x-hidden backdrop-blur-sm'>
                <div>
                    <Link href={'/'}>
                        <div className=' xss:w-8 xss:h-8'>
                            <Image
                                src={logo}
                                alt='logo'
                                // height={50}
                                // width={50}
                                className='cursor-pointer rounded-full '
                                priority
                            />
                        </div>

                    </Link>
                </div>

                <MobileNavButton />

                <div className=' flex items-center gap-6  uppercase font-medium xss:hidden'>
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