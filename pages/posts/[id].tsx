import Link from "next/link";
import Button from "../../components/Button";
import { PostData, getAllPostsIDs, getPostData } from "../../lib/posts";
import button from '../../components/styles/Button.module.css'
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import BlogDate from "../../components/Date";
import Section from "../../components/Section";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import me from '../../public/images/peeps-avatar-alpha.png'
import Footer from "../../components/Footer";
import Markdown from 'markdown-to-jsx'

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
        fallback: true
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
                xms:mt-20 xms:mx-2
                xss:mt-24 xss:mx-4
                xl:mx-56
                xm:mx-80 xm:pl-0">
                    <article className="mb-14">
                        <div className=" flex flex-col justify-around items-center 
                        xss:mb-10 xss:flex xss:flex-col xss:justify-between xss:items-start border-b-2  border-[#e6e1c561] xms:items-start">
                            <div className=" flex flex-row justify-between items-center">
                                <Link href={'/blogs'} className=" xss:mb-0 font-semibold xss:text-base opacity-70 border-[2px] hover:duration-500 hover:border-[#cbf420] border-[#e6e1c561] xss:py-1 xss:px-3 rounded-3xl xms:px-3 xms:pt-2 xms:pb-1 xms:rounded-xl">
                                    👈  Back
                                </Link>

                            </div>
                            <h1 className=" leading-relaxed text-center text-[#CEFF1A] font-semibold tracking-tight
                            xms:text-start xms:text-3xl xms:mt-4 xms:mb-2
                            xss:text-3xl xss:mb-2 xss:text-start
                            xs:text-4xl xs:mb-2 xs:text-start
                            xl:text-5xl xl:mt-6">
                                <Balancer>
                                    {postsData.title}
                                </Balancer>
                            </h1>
                            <div className=" text-center opacity-70 xss:text-sm font-medium
                            xl:text-base xms:text-sm">
                                <BlogDate date={postsData.date} />
                            </div>
                            <div className="flex flex-row justify-between items-end w-full font-medium
                            xms:mt-10 xms:mb-3
                            xss:my-5
                            xl:mt-16">
                                <div className=" flex flex-row justify-start items-center
                                ">
                                    <div className=" rounded-full overflow-hidden font-medium
                                xss:h-10 xss:w-10 xss:mt-4
                                xl:h-14 xl:w-14
                                xms:w-10 xms:h-10">
                                        <Image src={me} alt="moiz" quality={70} />
                                    </div>
                                    <h5 className=" w-1/2 xl:leading-tight text-base opacity-70 xss:ml-2 xss:w-1/2 xss:leading-tight xss:mt-3 xl:text-base  xl:tracking-tight xms:text-[14px]  xms:ml-2 xms:pb-1 xl:pt-3 xl:pb-0">
                                        Moiz Ghuman
                                    </h5>
                                </div>

                                <h6 className=" text-base xss:text-sm opacity-70 xms:text-[14px]">
                                    3 min read
                                </h6>
                            </div>
                        </div>

                        <article className="prose text-[#e6e1c5] prose-headings:text-[#e6e1c5] prose-headings:opacity-100 prose-ul:opacity-90 prose-p:opacity-90 prose-code:text-[#ced0d6] lg:prose-xl
                        xss:mb-8
                        xl:text-lg xl:leading-loose xl:mb-16 xms:my-10 xms:opacity-90 xms:leading-relaxed">
                            <Markdown>{postsData.contentHtml}</Markdown>
                        </article>
                        <Link href={'/'} className={button.link}>
                            <Button>
                                Back to Home
                            </Button>
                        </Link>
                    </article>
                </div>

            </Section>

            <Footer />
        </>
    )
}
export default Post