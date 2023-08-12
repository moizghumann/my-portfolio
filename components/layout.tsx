import { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Footer from './Footer';


const name = 'Moiz Ghuman';
export const siteTitle = `Moiz Ghuman`;

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>
                    {siteTitle}
                </title>
                <link rel="icon" href="/images/peeps-avatar-alpha.png" />
                <meta
                    name="description"
                    content="Creative Frontend Engineer building experiences with react, typescript, nextjs, and tailwindcss."
                />
                <meta
                    property="og:title"
                    content={siteTitle}
                />
                <meta
                    property="og:description"
                    content="Creative Frontend Engineer building experiences with react, typescript, nextjs, and tailwindcss."
                />
                <meta
                    property="og:image"
                    content="/images/peeps-avatar-alpha.png"
                />
                <meta
                    property="og:url"
                    content="https://www.yourwebsite.com"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yourtwitterhandle" />
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