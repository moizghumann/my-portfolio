import React from 'react';
import Section from './Section';
import Button from './Button';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';



const Hero = () => {
    return (
        <Section>
            <div className=' block h-full mt-56 xs:mt-36 xss:mt-36 mb-28 
            xs:h-full xs:pt-5 xs:mb-44
            xt:h-screen xt:mb-0 xt:pt-28 xt:mt-24
            xl:pt-56 xl:mt-0'>

                <h1 className='xl:text-7xl xs:text-[42px] xs:leading-[1.1]  xss:text-4xl mx-auto text-center
                xt:text-6xl 
                font-semibold xss:font-bold max-w-4xl  tracking-tight text-[#e6e1c5] opacity-90'>
                    <Balancer>
                        Moiz focuses on crafting meaningful experiences as an
                        <span className='text-[#CEFF1A] ml-4 xs:ml-2 xss:ml-2 xl:ml-4'>
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
                    <Button>
                        Poke me
                    </Button>

                </div>
            </div>
        </Section>
    );
};

export default Hero;
