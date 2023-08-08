import Image from 'next/image'
import React from 'react'
import Section from './Section'
import ArrowButton from './ArrowButton'
import ShowcaseIcon from './ShowcaseIcon'
import goku from '../public/12916.gif'

const Showcase = () => {
    return (
        <>
            <Section>

                <div className=' grid place-items-center 
                '>
                    <h2 className=' text-center font-semibold tracking-tight text-[#CEFF1A]
                    xss:font-bold xss:text-4xl
                    xt:text-5xl
                    xl:text-6xl'>
                        Projects
                    </h2>
                    <p className=' text-lg opacity-90 text-[#E6E1C5] text-center mt-4 w-[45%] tracking-tight
                    xss:w-3/5 
                    xt:w-1/2'>
                        While Moiz has worked on a couple of other projects as well, here a few of them
                    </p>
                </div>

                <div className='grid gap-5 mt-11 h-fit
                xl:grid-cols-9 
                xss:px-10 
                xt:grid-cols-2 xt:grid-rows-2
                xm:mx-28'>
                    <div className='xl:col-span-6 h-full xt:col-span-1  bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
                        <div className=' xss:p-6 pb-10 flex flex-col justify-between items-start h-fit'>

                            <div>
                                <ShowcaseIcon />
                                <h3 className='text-start tracking-tight font-semibold xss:font-bold text-4xl xss:text-3xl text-[#0e1420] pb-4 pt-1'>
                                    GameVerse
                                </h3>
                                <p className='text-[#0e1420] w-[70%] xss:w-full xss:mb-7'>
                                    Gameverse is a platform for exploring and discovering video games, where users can find information about games, view their details, and filter through different genres, platforms and more.
                                </p>
                            </div>
                            <ArrowButton />

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
                        <div className=' xss:p-6 pb-10 flex flex-col justify-between items-start h-full'>

                            <div>
                                <ShowcaseIcon />
                                <h3 className=' tracking-tight text-start font-semibold xss:font-bold xss:text-3xl text-3xl text-[#0e1420] pb-3 pt-1'>
                                    Tic Tac Toe
                                </h3>
                                <p className='text-[#0e1420] w-[90%] xss:w-full xss:mb-7'>
                                    Implemented efficient winning algorithm,ensuring accurate game outcomes.Employed clean, modular code for efficiency.
                                </p>
                            </div>
                            <ArrowButton />

                        </div>
                    </div>
                    <div className='xt:grid xs:grid xs:gap-5 xt:gap-5 xss:gap-5 xl:col-span-5 xt:grid-cols-2 xt:col-span-2 xs: grid-cols-1'>
                        <div className=' xl:col-span-1 xt:col-span-1 bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
                            <div className=' xss:p-6 flex flex-col justify-between items-start h-full '>

                                <div>
                                    <ShowcaseIcon />
                                    <h3 className=' tracking-tight text-start font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-[7px]'>
                                        Todo App
                                    </h3>
                                    <p className='text-[#0e1420] w-[95%] xss:w-full xss:mb-7'>Interactive Todo game using React, TypeScript, and React Query</p>
                                </div>

                                <ArrowButton />
                            </div>
                        </div>
                        <div className='bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl '>
                            <div className=' xss:p-6 flex flex-col justify-between items-start h-full xl:col-span-1'>

                                <div>
                                    <ShowcaseIcon />
                                    <h3 className='text-start tracking-tight font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-[7px]'>
                                        Expense Tracker
                                    </h3>
                                    <p className='text-[#0e1420] w-[95%] xss:w-full xss:mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                                <ArrowButton />
                            </div>

                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Showcase