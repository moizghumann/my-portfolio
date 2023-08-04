import path from 'path'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'

interface BlogsData {
    id: string;
    date?: string
}

const blogsDirectory = path.join(process.cwd(), 'posts');

const getSortedBlogsData = () => {
    const blogNames = fs.readdirSync(blogsDirectory)

    const Blog: BlogsData[] = blogNames.map((eachBlog: string) => {
        const id = eachBlog.replace(/\.md$/, '');
        const blogPath = path.join(blogsDirectory, eachBlog);
        const readBlog = fs.readFileSync(blogPath, 'utf-8');
        const blogMatterResult = matter(readBlog) as GrayMatterFile<string>

        return {
            id,
            ...blogMatterResult.data
        }
    });

    return Blog.sort((c, d) => {
        if (c.date < d.date)
            return 1;
        else return -1;
    })
}