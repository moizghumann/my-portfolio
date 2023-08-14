import React from 'react'
import Image from 'next/image'
import game from '../public/gameLogos/console-svgrepo-com.svg'


const ShowcaseIcon = () => {
    return (
        <div className=' xss:w-10 xss:h-10
        xms:w-9 xms:h-9'>
            <Image src={game} alt='game-logo' />
        </div>
    )
}

export default ShowcaseIcon