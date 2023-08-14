import React, { useEffect, useRef } from 'react'
import Section from './Section'
import useNavTagsStore from '../state-management/NavigationScrollStore'

const Services = () => {
    const selectedTag = useNavTagsStore(s => s.selectedTag);
    const targetServicesRef = useRef(null);

    useEffect(() => {
        if (selectedTag === 'Services') {
            targetServicesRef.current.scrollIntoView({ behavior: 'smooth' })
        };
        localStorage.removeItem('selectedTag');
    }, [selectedTag])

    return (
        <Section>
            <div className=' h-full mt-20 
            xs:mt-10
            xt:mt-32 xt:mx-0
            xl:mx-0'
                ref={targetServicesRef}>
                <h1 className=' text-4xl font-semibold tracking-tight text-[#cbf420] opacity-90
                xms:text-3xl
                xss:text-3xl 
                xs:text-4xl'
                >
                    What I do?
                </h1>
                <div className=' text-6xl w-full font-medium tracking-tigh mt-4 
                xms:text-3xl
                xs:mt-3 xs:text-[35px]
                xss:mt-2 xss:text-[33px] xss:font-semibold
                xt:mt-4 xt:text-[42px] tracking-tight
                xl:text-6xl xl:font-medium'>
                    <div className=' py-4 xss:py-2 xs:py-3 xl:py-4 border-t-2  border-[#e6e1c561]'>
                        Design user interfaces
                    </div>
                    <div className=' py-4 xss:py-2 xs:py-3 xl:py-4 border-t-2 border-[#e6e1c561]'>
                        Craft engaging user experiences
                    </div>
                    <div className=' py-4 xss:py-2 xs:py-3 xl:py-4 border-t-2 border-[#e6e1c561]'>
                        Develop design into websites
                    </div>
                    <div className=' py-4 xss:py-2 xs:py-3 xl:py-4 border-t-2 border-[#e6e1c561]'>
                        Connect frontend to backend APIs
                    </div>
                    <div className=' py-4 xss:py-2 xs:py-3 xl:py-4 border-t-2 border-[#e6e1c561]'>
                        Manage the product
                    </div>
                    <div className='border-t-2 border-[#e6e1c561]'></div>
                </div>
            </div>


        </Section >
    )
}

export default Services