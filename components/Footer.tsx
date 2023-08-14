import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '../public/socials/twitter-svgrepo-com (2).svg'
import linkedin from '../public/socials/linkedin-svgrepo-com (2).svg'
import github from '../public/socials/github-142-svgrepo-com (1).svg'
import copyright from '../public/copyright-svgrepo-com (3).svg'

const Footer = () => {
    return (
        <div className=' flex flex-col justify-center items-center mb-5 mx-20 
        xms:mx-5 xms:mb-3
        xss:mb-2 xss:mx-2
        xs:mb-2 xs:mx-5
        xt:mx-10
        xl:mx-24'>
            <div className=' mx-10 w-full rounded-2xl px-5 mb-5 h-20 bg-[#B8DE1E] flex flex-row justify-between items-center
            xms:h-fit xms:py-4 xms:px-4 xms:mb-3
            xss:mb-2 xss:py-4 xss:h-fit xss:px-[13px]
            xs:px-4 xs:h-14 xs:py-8
            xt:mb-3
            xl:py-10 xl:px-5'>
                <div className='flex flex-row justify-center pl-1 items-center bg-[#0E1421] rounded-lg h-8 w-8'>
                    <h1 className=' text-lg font-semibold text-[#B8DE1E]'>
                        m.
                    </h1>
                </div>

                <div className=' flex flex-row justify-center items-center gap-3'>
                    <Link href={'https://twitter.com/ghumanmoiz'}>
                        <Image src={twitter} alt='twitter link' height={30} width={30} />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/moiz-shaukat-7ba6991ab/'}>
                        <Image src={linkedin} alt='twitter link' height={30} width={30} />
                    </Link>
                    <Link href={'https://github.com/moizghumann'}>
                        <Image src={github} alt='twitter link' height={28} width={28} />
                    </Link>
                </div>
            </div>


            <p className=' flex items-center justify-center opacity-60 text-[12px] flex-wrap 
            xss:px-2 
            xs:text-center
            xt:mb-1'>
                Copyright
                <Image src={copyright} alt='copright icon' height={15} width={15} className='mx-[4px]' /> Moiz's Portfolio 2023. Made with
                <a href={'https://tailwindcss.com/'} className='ml-[4px]'>
                    Tailwindcss,
                </a>
                <a href={'https://nextjs.org/'} className='mx-[4px]'>
                    Next.js
                </a>
                and 💜 by Moiz Ghuman
            </p>


        </div>
    )
}

export default Footer