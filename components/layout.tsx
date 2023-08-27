import { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Footer from './Footer';


const intro = 'Moiz Ghuman - Frontend Developer';
export const siteTitle = `Moiz Ghuman`;

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>
                    {intro}
                </title>
                <link rel="icon" href="/images/peeps-avatar-alpha.png" />
                <meta charSet='UTF-8' />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="og:locale"
                    content="en-US"
                />
                <meta name="title" content="Moiz Ghuman - Creative Frontend Engineer" />
                <meta name="description" content="Creative Frontend Engineer painting DOM with React, rendering best experiences with Nextjs while writing type safe Typescript and styling the web with TailwindCSS." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextjs-blog-three-rust-27.vercel.app/" />
                <meta property="og:title" content="Moiz Ghuman - Creative Frontend Engineer" />
                <meta property="og:description" content="Creative Frontend Engineer painting DOM with React, rendering best experiences with Nextjs while writing type safe Typescript and styling the web with TailwindCSS." />
                <meta property="og:image" content="https://nextjs-blog-three-rust-27.vercel.app/images/Group1.jpg" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nextjs-blog-three-rust-27.vercel.app/" />
                <meta property="twitter:title" content="Moiz Ghuman - Creative Frontend Engineer" />
                <meta property="twitter:description" content="Creative Frontend Engineer painting DOM with React, rendering best experiences with Nextjs while writing type safe Typescript and styling the web with TailwindCSS." />
                <meta property="twitter:image" content="https://nextjs-blog-three-rust-27.vercel.app/images/Group1.jpg" />


                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={intro} />
                <meta name="apple-mobile-web-app-title" content="Moiz Ghuman Portfolio" />
            </Head>

            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default Layout