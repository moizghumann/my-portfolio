import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';
import Toast from './Toast';


const Hero = () => {
    const [showToast, setShowToast] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0)
    const toastState = showToast;
    const handlePokeClick = () => {
        setShowToast(true);
        setCounter((prev) => prev + 1);
    };

    const handleClick = (stateData: boolean) => {
        // for setting showToast to false
        setShowToast(stateData);
    }
    return (
        <Section>
            <div className=' block h-full mt-56 xs:mt-36 mb-28 
            xss:mt-0 
            xms:mt-0 xms:pt-36
            xs:h-full xs:pt-5 xs:mb-44 xs:px-0
            xt:h-screen xt:mb-0 xt:pt-28 xt:mt-24
            xl:pt-56 xl:mt-0'>

                <h1 className='xl:text-7xl xs:text-4xl xs:leading-[1.1]  xss:text-4xl mx-auto text-center
                xt:text-6xl 
                xms:text-[28px] xms:leading-tight
                xm:text-[75px] xm:w-screen
                font-semibold xss:font-bold max-w-4xl  tracking-tight text-[#e6e1c5] opacity-90'>
                    <Balancer>
                        Moiz focuses on crafting meaningful experiences as an
                        <span className='text-[#CEFF1A] ml-4 xs:ml-2 xss:ml-2 xl:ml-4 xms:ml-2'>
                            independent frontend developer
                        </span>
                    </Balancer>
                </h1>
                {/* <div className=' absolute left-32 bottom-44
                xl:w-40 xl:h-40'>
                    <Image src={bolt} alt='bolt' />
                </div> */}

                <div className=' flex flex-row justify-center gap-4 mt-14'>
                    <Link href={'/blogs'}>
                        <Button>
                            Read my Blog
                        </Button>
                    </Link>
                    <div onClick={handlePokeClick}>
                        <Button>
                            Poke me
                        </Button>
                    </div>
                </div>
            </div>
            {showToast && <Toast onclick={handleClick} toastState={toastState} counter={counter} />}
        </Section>
    );
};

export default Hero;
