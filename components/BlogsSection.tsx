import React from 'react'
import BlogsHeading from './BlogsHeading'
import BlogsGrid from './BlogsGrid'
import { GetStaticProps } from 'next';
import { PostData, getSortedPostsData } from '../lib/posts';

interface BlogsDataProps {
    blogsData: PostData[]
}

const BlogsSections = ({ blogsData }: BlogsDataProps) => {
    return (
        <>
            <BlogsHeading heading={'My thoughts, learnings, and journey through these blogs'} />
            <div className='  w-full m-0 p-0 mb-40'>
                <BlogsGrid />
            </div>

        </>
    )
}

export default BlogsSections