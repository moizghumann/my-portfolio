import React, { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <section className='mb-20 xs:mb-16 mx-10 xs:mx-5 xss:mx-2 rounded-md overflow-x-hidden xs:mb-15'>
            {children}
        </section>
    )
}

export default Section