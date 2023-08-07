import React from 'react'

interface BlogsHeadingProps {
    heading: string;
}

const BlogsHeading = ({ heading }: BlogsHeadingProps) => {
    return (
        <div className=' block mt-48 mb-28 px-40 xss:px-10 xss:mb-16'>
            <h1 className=' text-5xl xss:text-4xl font-normal xss:font-semibold tracking-tight text-center '>
                My thoughts, learnings, and journey through these blogs
            </h1>
        </div>
    )
}

export default BlogsHeading