import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import { PostData, getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import Button from '../components/Button';
import Link from 'next/link';
import button from '../components/styles/Button.module.css'
import usePokemon from '../lib/pokemon';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import BlogDate from '../components/Date';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import About from '../components/About';
import Services from '../components/Services';
import Motto from '../components/Motto';
import Contact from '../components/Contact';
import Layout from '../components/layout';

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

const Home = ({ allPostsData }: HomeProps) => {
  // const { data, isLoading } = usePokemon();
  return (
    <>
      <Layout>
        <Hero />
        <Showcase />
        <About />
        <Services />
        <Motto />
        <Contact />
      </Layout>
    </>
  )
}

export default Home;