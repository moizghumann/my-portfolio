import React from 'react'
import BlogCard from './BlogCard'

const BlogsGrid = () => {
    return (
        <div className=' grid grid-cols-4 gap-8 xl:grid-cols-4 xm:grid-cols-4 xt:grid-cols-3 xs:grid-cols-1 cursor-pointer'>
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
            <BlogCard heading='Noteworthy technology acquisitions 2021' />
        </div>
    )
}

export default BlogsGrid