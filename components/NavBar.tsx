import React from 'react'
import Image from 'next/image'
import logo from '../public/images/ultimate_(1)-transformed.jpeg'
import Link from 'next/link'
import MobileNavButton from './MobileNavButton'

const NavBar = () => {
    return (
        <nav className='fixed w-full h-fit z-10 top-0  mb-5 
        xss:px-5
        xt:px-0 xt:mx-10 xt:pr-[72px]
        xl:pr-[120px] xl:pl-10'>
            <div className='flex flex-row justify-between items-center h-20 w-full px-6 xss:px-4 xss:py-3 
            xss:h-fit ring-2 ring-[#E6E1C5] rounded-3xl xss:rounded-2xl mt-7 overflow-x-hidden backdrop-blur-sm
            xl:px-6 xl:py-3 xl:rounded-2xl
            '>
                <div>
                    <Link href={'/'}>
                        <div className=' xss:w-8 xss:h-8
                        xt:w-11 xt:h-11
                        xl:w-14 xl:h-14'>
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

                <div className=' xl:flex xl:items-center xl:gap-6  uppercase text-base font-medium 
                xss:hidden
                xl:visible'>
                    <Link href={'/blogs'} className=' hover:text-[#b8de1e]'>
                        Blogs
                    </Link>
                    <text>Services</text>

                    <text>About</text>
                    <div className=' flex justify-center items-center py-2 px-3 bg-[#bf375d] opacity-100 rounded-lg'>
                        <text className='text-[#E6E1C5]'>Contact me</text>
                    </div>
                </div>
                <MobileNavButton />
            </div>
        </nav>
    )
}

export default NavBar