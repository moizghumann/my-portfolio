import Link from "next/link";
import Button from "../../components/Button";
import { PostData, getAllPostsIDs, getPostData } from "../../lib/posts";
import button from '../../components/styles/Button.module.css'
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import utils from '../../styles/utils.module.css'
import BlogDate from "../../components/Date";
import Layout from "../../components/layout";
import Section from "../../components/Section";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import me from '../../public/images/ultimate_(1)-transformed.jpeg'

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
            <Section>
                <Head>
                    <title>{postsData.title}</title>
                </Head>

                <div className=" grid place-items-center
                xss:mt-32 xss:mx-4">
                    <article>
                        <div className=" flex flex-col justify-around items-center
                        xss:mb-10">
                            <h1 className="  text-center text-[#CEFF1A]
                            xss:font-semibold xss:text-3xl xss:mb-2">
                                <Balancer>
                                    {postsData.title}
                                </Balancer>
                            </h1>
                            <div className=" text-center opacity-70">
                                <BlogDate date={postsData.date} />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className=" rounded-full overflow-hidden
                                xss:h-10 xss:w-10 xss:mt-4">
                                    <Image src={me} alt="moiz" quality={100} priority />
                                </div>
                                <h5 className=" text-sm w-1/2">Moiz Ghuman</h5>
                            </div>
                        </div>
                        <div className=" leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: postsData.contentHtml }}
                        />
                    </article>

                    <Link href={'/'} className={button.link}>
                        <Button>
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    )
}
export default Post