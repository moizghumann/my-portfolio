import { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Footer from './Footer';


const name = 'Moiz Ghuman';
export const siteTitle = `Moiz Ghuman's Portfolio Website`;

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/peeps-avatar-alpha.png" />
                <meta name="Moiz Ghuman" content="A frontend developer pushing limits everyday" />
                <meta
                    property="og:image"
                    content={`https://imgur.com/a/f6HCfYl`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
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