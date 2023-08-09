import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <section className='mb-20 mx-10 rounded-md p-5 overflow-x-hidden'>
            {children}
        </section>
    )
}

export default Section