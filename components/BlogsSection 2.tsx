import React from 'react'
import BlogsHeading from './BlogsHeading'
import BlogsGrid from './BlogsGrid'

const BlogsSections = () => {
    return (
        <>
            <BlogsHeading heading={'My thoughts, learnings, and journey through these blogs'} />
            <div className='  w-full m-0 p-0 mb-20'>
                <BlogsGrid />
            </div>

        </>
    )
}

export default BlogsSections