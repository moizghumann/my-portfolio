import React from 'react'
import Section from '../components/Section'
import BlogsSections from '../components/BlogsSection'
import Button from '../components/Button'
import Link from 'next/link'
import Layout from '../components/layout'

import { GetStaticProps } from 'next';
import { PostData, getSortedPostsData } from '../lib/posts';

// getStaticProps can only be exported from a page. You can’t export it from non-page files.
// As getStaticProps runs only on the server-side, it will never run on the client-side.
export const getStaticProps: GetStaticProps = async () => {
    // const queryClient = new QueryClient()
    // the prefetchQuery function is used in getStaticProps for initial data fetching during server-side rendering (SSR) or static-site rendering (SSG) at build time, while the useQuery hook is responsible for cache management and handling subsequent data fetches on the client-side after hydration.
    // await queryClient.prefetchQuery(['posts'], usePokemon)
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
            // dehydratedState: dehydrate(queryClient)
        }
    }
}

interface HomeProps {
    allPostsData: PostData[]
}

const Blogs = ({ allPostsData }: HomeProps) => {
    return (
        <Layout>
            <Section >
                <BlogsSections blogsData={allPostsData} />

            </Section>
        </Layout>
    )
}

export default Blogs