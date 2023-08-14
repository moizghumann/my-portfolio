import React from 'react'
import Section from '../components/Section'
import Link from 'next/link'
import Layout from '../components/layout'
import { GetStaticProps } from 'next';
import { PostData, getSortedPostsData } from '../lib/posts';
import BlogsHeading from '../components/BlogsHeading'
import BlogCard from '../components/BlogCard'

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

interface BlogsProps {
    allPostsData: PostData[]
}


const Blogs = ({ allPostsData }: BlogsProps) => {
    console.log(allPostsData)
    return (
        <Layout>
            <Section >
                <BlogsHeading heading={'My thoughts, learnings, and journey through these blogs'} />
                <div className=' grid place-items-center  w-full m-0 p-0 mb-40'>
                    <div className=' grid grid-cols-4 gap-8 xl:grid-cols-4 xm:grid-cols-4 xt:grid-cols-3 xs:grid-cols-2 xs:gap-10 xs:px-5
                    xss:grid-cols-2 xss:px-4 xss:gap-4 cursor-pointer xms:grid-cols-2 xms:gap-4'>

                        {/* <BlogCard heading='Noteworthy technology acquisitions 2021' /> */}
                        {allPostsData.map(({ id, title }) =>
                            <Link href={`/posts/${id}`} key={id}>
                                <BlogCard title={title} />
                            </Link>
                        )}
                    </div>
                </div>

            </Section>
        </Layout>
    )
}

export default Blogs