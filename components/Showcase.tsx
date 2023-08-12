import Image from 'next/image'
import React from 'react'
import Section from './Section'
import ArrowButton from './ArrowButton'
import ShowcaseIcon from './ShowcaseIcon'
import goku from '../public/12916.gif'
import { Balancer } from 'react-wrap-balancer'

const Showcase = () => {
    return (
        <>
            <Section>



                <div className='grid gap-5 mt-11 h-fit
                xl:grid-cols-9 xl:mx-10 
                xss:px-0 xss:gap-3 xss:mt-0
                xt:grid-cols-2 xt:grid-rows-2
                xm:mx-10'>

                    <div className=' flex flex-col items-start h-fit bg-[#CEFF1A] rounded-xl p-4 pt-4 text-[#0E1421]
                xss:pt-0
                xs:pt-0
                xt:pt-0
                xl:pt-0'>
                        <h2 className=' text-start font-semibold tracking-tight
                    xss:font-bold xss:text-4xl xss:pt-4
                    xt:text-5xl
                    xl:text-6xl'>
                            Projects
                        </h2>
                        <p className=' text-lg font-medium xl:opacity-80 tracking-tight xl:leading-relaxed xl:text-xlty-90 text-start mt-4 w-[45%]
                    xss:w-full xss:font-semibold xss:text-xl
                    xt:w-1/2
                    xs:w-fit'>
                            <Balancer>
                                While Moiz has worked on a couple of other projects as well, here are a few of them
                            </Balancer>
                        </p>
                    </div>

                    <div className='xl:col-span-6 h-full xt:col-span-1  bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
                        <div className=' xss:p-4 pb-10 flex flex-col justify-between items-start h-full'>

                            <div>
                                <ShowcaseIcon />
                                <h3 className='text-start tracking-tight font-semibold xss:font-bold text-4xl xss:text-3xl text-[#0e1420] pb-2 pt-1'>
                                    GameVerse
                                </h3>
                                <p className='text-[#0e1420] font-medium xl:opacity-80 tracking-tight xl:leading-relaxed xl:text-xl w-[70%] xss:w-full xss:mb-6'>
                                    <Balancer>
                                        Gameverse is a platform for exploring and discovering video games, where users can find information about games, view their details, and filter through different genres, platforms and more.
                                    </Balancer>
                                </p>
                            </div>
                            <a href='https://game-verse.vercel.app/' target='_blank' className=' no-underline'>
                                <ArrowButton />
                            </a>


                        </div>
                    </div>

                    <div className=' rounded-2xl xl:col-span-3 h-full relative overflow-hidden
                    xss:hidden
                    xs:hidden
                    xt:visible 
                    xl:visible xl:block'>
                        <Image src={goku} alt='goku' objectFit='cover' fill={true} priority />
                    </div>

                    <div className='xl:col-span-4 xt:col-span-1 bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl h-full'>
                        <div className=' xss:p-4 pb-10 flex flex-col justify-between items-start h-full'>

                            <div>
                                <ShowcaseIcon />
                                <h3 className=' tracking-tight text-start font-semibold xss:font-bold xss:text-3xl text-3xl text-[#0e1420] pb-2 pt-1'>
                                    Tic-Tac-Toe Game
                                </h3>
                                <p className='text-[#0e1420] font-medium xl:opacity-80 tracking-tight xl:leading-relaxed xl:text-xl w-[90%] xss:w-full xss:mb-6'>
                                    Implemented efficient winning algorithm,ensuring accurate game outcomes.Employed clean, modular code for efficiency.
                                </p>
                            </div>
                            <a href='https://tic-tac-toe-game-lyart-three.vercel.app/' target='_blank' className=' no-underline'>
                                <ArrowButton />
                            </a>

                        </div>
                    </div>
                    <div className='xt:grid xs:grid grid xs:gap-5 xt:gap-5 xss:gap-3 xl:col-span-5 xt:grid-cols-2 xt:col-span-2 xs: grid-cols-1'>
                        <div className=' xl:col-span-1 xt:col-span-1 bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl xss:gap-5 h-fit xl:h-full'>
                            <div className=' xss:p-4 flex flex-col justify-between items-start  xl:h-full'>

                                <div>
                                    <ShowcaseIcon />
                                    <h3 className=' tracking-tight text-start font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-2'>
                                        Todo App
                                    </h3>
                                    <p className='text-[#0e1420] font-medium xl:opacity-80 tracking-tight xl:leading-relaxed xl:text-xl w-[95%] xss:w-full xss:mb-6'>Interactive Todo game using React, TypeScript, and React Query.</p>
                                </div>

                                <a href='https://expense-tracker-gehc.vercel.app/' target='_blank' className=' no-underline'>
                                    <ArrowButton />
                                </a>
                            </div>
                        </div>
                        <div className='bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl h-fit xl:h-full '>
                            <div className=' xss:p-4 flex flex-col justify-between items-start xl:col-span-1 
                            xl:h-full'>

                                <div>
                                    <ShowcaseIcon />
                                    <h3 className='text-start tracking-tight font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-2'>
                                        Expense Tracker
                                    </h3>
                                    <p className='text-[#0e1420] font-medium xl:opacity-80 tracking-tight xl:leading-relaxed xl:text-xl w-[95%] xss:w-full xss:mb-6'>Developed an Expense Tracker using Bootstrap, React and React Hook forms with Zod for schema validation.</p>
                                </div>

                                <a href='https://expense-tracker-gehc.vercel.app/' target='_blank' className=' no-underline'>
                                    <ArrowButton />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Showcase