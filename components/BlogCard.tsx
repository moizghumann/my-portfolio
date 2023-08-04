import React from 'react'
import lofi from '../public/blogImages/Lofi Apartments.jpeg'
import Image from 'next/image'

interface BlogCardProp {
    heading: string;
}

const BlogCard = ({ heading }: BlogCardProp) => {
    return (
        <div className="max-w-sm rounded-lg shadow">

            <div className='relative h-56 overflow-hidden rounded-xl'>
                <Image src={lofi}
                    alt='lofi'
                    fill={true}
                    style={{ objectFit: "cover" }}
                    quality={100}
                    priority
                    className=' rounded-xl hover:scale-105 transition ease-in-out duration-500'
                />
            </div>

            <div className="pt-5 pr-2">
                <h6 className=' text-sm font-medium uppercase'>Tech</h6>
                <h5 className="mb-2 text-2xl font-medium tracking-tight ">
                    {heading}
                </h5>

            </div>
        </div>
    )
}

export default BlogCard