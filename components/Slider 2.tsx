import React from 'react'
import Image from 'next/image'
import next from '/public/logos/nextjs-logotype-dark-background.svg'
import chakra from '../public/logos/icons8-chakra-ui.svg'
import react from '../public/logos/react-2 (1).svg'
import reactQuery from '../public/logos/react-query-seeklogo.com.svg'
import reactRouter from '../public/logos/react-router-seeklogo.com.svg'
import tailwind from '../public/logos/tailwindcss.svg'
import typescript from '../public/logos/typescript (1).svg'
import zustand from '../public/logos/zustandd.svg'
import axios from '../public/logos/axios-seeklogo.com.svg'
import javascript from '../public/logos/logo-javascript.svg'
import html from '../public/logos/html-1.svg'
import css from '../public/logos/css-3.svg'
import styles from './styles/slider.module.css'
const Slider = () => {
    return (
        <div className=' mx-[-10] flex flex-row h-22 w-screen bg-hsl(204, 5%, 9%) overflow-hidden whitespace-nowrap relative before:absolute before:top-0 before:w-[250px] before:h-[100%] before:content-[""] before:z-10 
            after:absolute after:top-0 after:w-[250px] after:h-[100%] after:content-[""] after:z-10 
            before:bg-gradient-to-l from-transparent to-hsl(0, 0%, 100%) before:left-0
            after:bg-gradient-to-r from-transparent to-hsl(0, 0%, 100%) after:right-0'>
            <div className={`flex ${styles.content} mr-16`}>
                <Image src={next} alt='next js' height={50} width={50} className='mx-10' />
                <Image src={react} alt='react' height={50} width={50} className='mx-10' />
                <Image src={typescript} alt='typescript' height={45} width={45} className='mx-10' />
                <Image src={javascript} alt='javascript' height={45} width={45} className='mx-10ˇ' />
                <Image src={zustand} alt='zustand' height={50} width={50} className='mx-10' />
                <Image src={tailwind} alt='tailwindcss' height={50} width={50} className='mx-10' />
                <Image src={chakra} alt='chakra ui' height={50} width={50} className='mx-10' />
                <Image src={reactQuery} alt='react query' height={50} width={50} className='mx-10' />
                <Image src={reactRouter} alt='react router' height={50} width={50} className='mx-10' />
                <Image src={axios} alt='axios' height={50} width={50} className='mx-10' />
                <Image src={html} alt='html' height={45} width={45} className='mx-10' />
                <Image src={css} alt='css' height={45} width={45} className='mx-10' />
            </div>

            <div className={`flex ${styles.content} pl-16`}>
                <Image src={next} alt='next js' height={50} width={50} className='mx-10' />
                <Image src={react} alt='react' height={50} width={50} className='mx-10' />
                <Image src={typescript} alt='typescript' height={45} width={45} className='mx-10' />
                <Image src={javascript} alt='javascript' height={45} width={45} className='mx-10' />
                <Image src={zustand} alt='zustand' height={50} width={50} className='mx-10' />
                <Image src={tailwind} alt='tailwindcss' height={50} width={50} className='mx-10' />
                <Image src={chakra} alt='chakra ui' height={50} width={50} className='mx-10' />
                <Image src={reactQuery} alt='react query' height={50} width={50} className='mx-10' />
                <Image src={reactRouter} alt='react router' height={50} width={50} className='mx-10' />
                <Image src={axios} alt='axios' height={50} width={50} className='mx-10' />
                <Image src={html} alt='html' height={45} width={45} className='mx-10' />
                <Image src={css} alt='css' height={45} width={45} className='mx-10' />
            </div>


        </div>
    )
}

export default Slider