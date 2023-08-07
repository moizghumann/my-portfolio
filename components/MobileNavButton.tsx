import React, { useState } from 'react'
import menu from '../public/menu.svg'
import Image from 'next/image'

const MobileNavButton = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div onClick={() => setNavOpen(!navOpen)}
                className=' cursor-pointer relative z-20'>
                <Image
                    src={menu}
                    alt='menu'
                    height={30}
                    width={30}
                    priority
                />
            </div>
            <div className={navOpen ? 'w-screen h-screen bg-[#c6ef1f] top-0 left-0'
                : 'hidden'}>
                sup
            </div>
        </>
    )
}

export default MobileNavButton