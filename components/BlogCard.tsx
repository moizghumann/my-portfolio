import React from 'react'
import lofi from '../public/blogImages/Lofi Apartments.jpeg'
import Image from 'next/image'

interface BlogCardProp {
    title: string
}

const BlogCard = ({ title }: BlogCardProp) => {
    return (
        <div className="max-w-sm rounded-lg shadow">

            <div className='relative h-56 overflow-hidden rounded-xl'>
                <Image src={lofi}
                    alt='lofi'
                    fill={true}
                    style={{ objectFit: "cover" }}
                    quality={100}
                    className=' rounded-xl hover:scale-105 transition ease-in-out duration-500'
                />
            </div>

            <div className="pt-5 pr-2">
                <h6 className=' text-sm xss:text-[10px] xs:text-base xs:opacity-70 font-medium xss:font-semibold uppercase'>Tech</h6>
                <h5 className="mb-2 text-2xl xss:text-xl font-medium tracking-tight ">
                    {title}
                </h5>

            </div>
        </div>
    )
}

export default BlogCard