import Image from 'next/image'
import React from 'react'
import Section from './Section'
import ArrowButton from './ArrowButton'
import ShowcaseIcon from './ShowcaseIcon'

const Showcase = () => {
    return (
        <>
            <Section>

                <div className=' grid place-items-center '>
                    <h2 className='text-6xl text-center font-semibold xss:font-bold xss:text-4xl tracking-tight text-[#CEFF1A]'>
                        Projects
                    </h2>
                    <p className=' text-lg opacity-90 text-[#E6E1C5] text-center mt-4 w-[45%] xss:w-full tracking-tight'>
                        While Moiz has worked on a couple of other projects as well, here a few of them
                    </p>
                </div>

                <div className='grid gap-5 xl:grid-cols-9 xss:px-10 mt-11 xt:grid-cols-2 xt:grid-rows-2'>
                    <div className='xl:col-span-4 xt:col-span-1  bg-[#e6e1c5] shadow-lg shadow-[#090D15] h-full rounded-2xl'>
                        <div className=' xss:p-6 pb-10 flex flex-col justify-between items-start h-full'>

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
                    <div className='xl:col-span-3 xt:col-span-1 bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
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
                    <div className='grid gap-5 xl:col-span-2 xl:grid-cols-1 xt:grid-cols-2 xt:col-span-2 xs: grid-cols-1'>
                        <div className=' xl:row-span-1 xt:col-span-1 bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
                            <div className=' xss:p-6 flex flex-col justify-between items-start '>

                                <ShowcaseIcon />
                                <h3 className=' tracking-tight text-start font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-[7px]'>
                                    Todo App
                                </h3>
                                <p className='text-[#0e1420] w-[95%] xss:w-full xss:mb-7'>Interactive Todo game using React, TypeScript, and React Query</p>

                                <ArrowButton />
                            </div>
                        </div>
                        <div className='bg-[#e6e1c5] shadow-lg shadow-[#090D15] rounded-2xl'>
                            <div className=' xss:p-6 flex flex-col justify-between items-start '>

                                <ShowcaseIcon />
                                <h3 className='text-start tracking-tight font-semibold xss:font-bold xss:text-3xl text-2xl text-[#0e1420] pt-[3px] pb-[7px]'>
                                    Expense Tracker
                                </h3>
                                <p className='text-[#0e1420] w-[95%] xss:w-full xss:mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

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