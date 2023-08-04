import React from 'react'
import Section from '../components/Section'
import BlogsSections from '../components/BlogsSection'
import Button from '../components/Button'
import Link from 'next/link'
import Layout from '../components/layout'

const Blogs = () => {
    return (
        <Layout>
            <Section >
                <BlogsSections />
                <Link href={'/'} className=' flex items-center justify-center '>
                    <Button>
                        Back to Moon
                    </Button>
                </Link>
            </Section>
        </Layout>
    )
}

export default Blogs