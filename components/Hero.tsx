import React from 'react';
import Section from './Section';
import Button from './Button';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';


const Hero = () => {
    return (
        <Section>
            <div className=' block mt-56 xs:mt-36 xss:mt-36 mb-28 
            xt:h-screen xt:mb-0 xt:mt-44'>

                <h1 className='text-7xl xs:text-[45px] xs:leading-[50px] xss:text-4xl mx-auto text-center
                xt:text-5xl 
                font-semibold xss:font-bold max-w-4xl  tracking-tight text-[#e6e1c5] opacity-90'>
                    <Balancer>
                        Moiz focuses on crafting meaningful experiences as an
                        <span className='text-[#CEFF1A] ml-4 xs:ml-2 xss:ml-2'>
                            independent frontend developer
                        </span>
                    </Balancer>
                </h1>


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
