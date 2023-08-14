import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import anotherme from '../public/images/ultimate_(1)-transformed.jpeg'
import Section from './Section'
import AboutExtended from './AboutExtended'
import useNavTagsStore from '../state-management/NavigationScrollStore'

const About = () => {
    const selectedTag = useNavTagsStore(s => s.selectedTag);
    const targetAboutRef = useRef(null);

    useEffect(() => {

        if (selectedTag === 'About') {
            targetAboutRef.current.scrollIntoView({ behavior: 'smooth' });
        };

        localStorage.removeItem('selectedTag');
    }, [selectedTag])

    return (
        <Section>
            <div className=' grid grid-cols-2 gap-8 mt-20 
            xms:grid-cols-5 xms:gap-2
            xs:gap-3 xs:mt-0 xs:grid-cols-12
            xss:grid-cols-7 xss:gap-3
            xt:grid-cols-12 xt:mt-0 xt:mx-0 xt:gap-4
            xl:mt-44 xl:grid-cols-12 xl:gap-5'
                ref={targetAboutRef}>
                <div className=' rounded-xl overflow-hidden relative 
                xms:col-span-3
                xs:col-span-7 
                xss:col-span-4
                xt:col-span-7
                xl:col-span-8 '>
                    <Image src={anotherme}
                        alt='moiz'
                        fill={true}
                        style={{ objectFit: "cover" }}
                        quality={100}

                    />
                </div>
                <div className='flex flex-col justify-around items-center border-2 border-[#e6e1c5] rounded-xl p-5 xs:p-2   min-w-fit text-9xl 
                xms:text-base xms:col-span-2
                xss:text-5xl xss:p-2 xss:col-span-3
                xs:text-6xl xs:col-span-5
                xt:text-[100px] xt:col-span-5
                xl:col-span-4 xl:text-[100px] xl:items-start
                xm:text-[110px] xm:items-center'>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight text-center 
                    xl:text-start
                    xm:text-center xm:w-1/2'>The one</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Who</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Gets</h1>
                    <h1 className='  text-[#e6e1c5] font-semibold tracking-tight'>Shit</h1>
                    <h1 className='  text-[#cbf420] font-semibold tracking-tight opacity-90'>Done!</h1>
                </div>

                <AboutExtended />
            </div>
        </Section>
    )
}

export default About