import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <section className='mb-20 mx-10 rounded-md h-fit
        xss:mx-2
        xs:mb-16 xs:mx-5 xs:mb-15
        xt:mx-6'>
            {children}
        </section>
    )
}

export default Section