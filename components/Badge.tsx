import React from 'react'

interface BadgeProp {
    badgeText: string;
}

const Badge = ({ badgeText }: BadgeProp) => {
    return (
        <div className=' bg-lime-400 rounded-lg flex flex-row justify-center items-center px-2 w-14 h-6'>
            <h3 className=' font-medium text-lime-950'>
                {badgeText}
            </h3>
        </div>
    )
}

export default Badge