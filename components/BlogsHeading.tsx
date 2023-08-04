import React from 'react'

interface BlogsHeadingProps {
    heading: string;
}

const BlogsHeading = ({ heading }: BlogsHeadingProps) => {
    return (
        <div className=' block mt-48 mb-28 px-40'>
            <h1 className=' text-5xl font-normal tracking-tight text-center '>
                My thoughts, learnings, and journey through these blogs
            </h1>
        </div>
    )
}

export default BlogsHeading