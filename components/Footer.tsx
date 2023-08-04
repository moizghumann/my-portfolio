import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '../public/socials/twitter-svgrepo-com (2).svg'
import linkedin from '../public/socials/linkedin-svgrepo-com (2).svg'
import github from '../public/socials/github-142-svgrepo-com (1).svg'
import copyright from '../public/copyright-svgrepo-com (3).svg'

const Footer = () => {
    return (
        <div className=' flex flex-col justify-center items-center mb-5 mx-20'>
            <div className=' mx-10 w-full rounded-2xl px-5 mb-5 h-20 bg-[#B8DE1E] flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-center pl-1 items-center bg-[#0E1421] rounded-lg h-8 w-8'> <h1 className=' text-lg font-semibold text-[#B8DE1E]'>m.</h1></div>

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


            <p className=' flex items-center opacity-70 text-sm'>
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