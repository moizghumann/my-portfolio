import Link from "next/link";
import Button from "../../components/Button";
import { PostData, getAllPostsIDs, getPostData } from "../../lib/posts";
import button from '../../components/styles/Button.module.css'
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import utils from '../../styles/utils.module.css'
import BlogDate from "../../components/Date";
import Layout from "../../components/layout";

// When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
interface PostsDataProps {
    postsData: PostData
}

// 1st step - get all the paths for dynamic routing
// Use `getStaticPaths` to fetch an array of blog IDs 
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIDs();
    return {
        paths,
        fallback: false
    }
}

// 2nd step - fetch data for the posts id in the dynamic route
// use `getStaticProps` to fetch data for each blog. 
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postsData = await getPostData(params?.id as string);
    return {
        props: {
            postsData
        }
    }
}

// 3rd step - react component to display the fetched posts data for our unique id in our dynamic route
const Post = ({ postsData }: PostsDataProps) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>{postsData.title}</title>
                </Head>
                <article>
                    <h1 className={utils.headingXl}>{postsData.title}</h1>
                    <div className={utils.lightText}>
                        <BlogDate date={postsData.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postsData.contentHtml }} />
                </article>

                <Link href={'/'} className={button.link}>
                    <Button>
                        Back to Home
                    </Button>
                </Link>

            </Layout>
        </>
    )
}
export default Post