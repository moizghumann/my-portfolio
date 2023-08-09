import React from 'react'
import Section from './Section'
import Badge from './Badge'



const Motto = () => {
    return (
        <Section>
            <div className='  flex flex-col justify-center items-center h-screen'>
                <div className=' flex flex-col justify-center items-center w-9/12'>
                    <Badge badgeText='Motto' />
                    <h1 className=' text-8xl font-semibold tracking-tight text-center'>
                        Design experiences that people never forget
                    </h1>
                </div>
            </div>
        </Section>
    )
}

export default Motto