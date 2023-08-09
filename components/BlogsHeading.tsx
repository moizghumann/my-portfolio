import React from 'react'

interface BlogsHeadingProps {
    heading: string;
}

const BlogsHeading = ({ heading }: BlogsHeadingProps) => {
    return (
        <div className='  grid place-items-center mt-48 xss:mt-36 mb-28 px-40 xss:px-10 xss:mb-16 xl:mt-48'>
            <h1 className=' text-5xl xss:text-4xl font-normal xss:font-semibold tracking-tight text-center xl:w-6/12 xl:text-5xl'>
                My thoughts, learnings, and journey through these blogs
            </h1>
        </div>
    )
}

export default BlogsHeading