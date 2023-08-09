import React from 'react';
import Section from './Section';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <Section>
            <div className=' block mt-56 mb-20'>
                <h1 className='text-7xl mx-auto text-center font-semibold max-w-4xl tracking-tight text-[#e6e1c5] opacity-90'>
                    Moiz focuses on crafting meaningful experiences as an
                    <span className='text-[#CEFF1A] ml-4'>
                        independent front-end developer
                    </span>
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
