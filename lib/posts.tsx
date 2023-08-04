// importing modules - It's like bringing some helpful friends who know how to handle papers and organize them.

// fs (File System) - Imagine fs as a friend who knows how to handle papers and files. They can read, write, and manipulate files on your computer, just like you can read, write, and draw on a piece of paper.
import fs from 'fs';

// path - Path is like a guide who knows the way around a maze. They help you navigate through different folders and files on your computer by providing the correct paths and directions.
import path from 'path';

// matter - Matter is a clever friend who knows how to extract important information from a piece of paper. They specialize in reading the top part of the paper, where important details like titles, dates, and authors are written. They can quickly find and understand that information for you.
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostData {
    id: string;
    date?: string;
    title?: string;
    contentHtml?: string // Add the necessary properties here
    // Add any other properties you expect to extract from the markdown files
}

// setting the folder location:
// You tell your friends the exact spot where the folder is kept, so they know where to look for the papers.

// postsDirectory is a variable that holds the path to the directory where the markdown files are located. process.cwd() returns the current working directory, and path.join() combines it with the relative path 'posts' to form the complete path.
const postsDirectory = path.join(process.cwd(), 'posts');

// Getting Ready to Organize:
// You and your friends get ready to start organizing the papers

// getSortedPostsData() is a function that reads the markdown files in the posts directory, parses their metadata, and returns an array of post data sorted by date.
export function getSortedPostsData() {

    // Reading the Paper Names:
    // You and your friends start looking at each paper in the folder and noting down their names.

    // retrieves an array of file names in the posts directory using the readdirSync method from the fs module. It reads the directory synchronously, meaning it blocks the execution until the file reading is complete.
    const fileNames = fs.readdirSync(postsDirectory);

    // Collecting Information from the Papers:
    // You and your friends read the special information written on each paper, like dates and other important details.

    // iterates over each file name and maps it to an object containing the post data. This object includes the id (derived from the file name without the .md extension) and the parsed metadata obtained from the markdown file.
    const allPostsData: PostData[] = fileNames.map((fileName: string) => {
        // processing each paper

        // Extracting the paper's ID
        // Imagine removing the paper's label (".md") to get a clean ID.
        const id = fileName.replace(/\.md$/, '');

        // Determining the paper's location
        // Think of it as knowing where the paper is stored in the filing cabinet.

        // generates the full path to each markdown file by joining the postsDirectory and fileName using the path.join() method.
        const fullPath = path.join(postsDirectory, fileName);

        // Reading the paper's contents
        //Just like opening the paper and reading what's written inside.

        // reads the contents of the markdown file specified by fullPath synchronously and stores it as a string in fileContents.
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parsing the paper's special information
        // It's like going through the paper and picking out the important details.

        // parses the front matter metadata from the fileContents using the matter library, and stores the result in matterResult.
        const matterResult = matter(fileContents) as GrayMatterFile<string>;
        return {
            // Combining all the information about the paper
            // Using the spread operator allows you to merge the properties from matterResult.data into the new object, alongside the id property. This ensures that you include all the important details extracted from the metadata in the returned object.
            id,
            ...matterResult.data,
        };
    }); // Now we have all the processed papers together in a neat stack.

    // returns allPostsData sorted by date in descending order
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostsIDs() {
    const postNames = fs.readdirSync(postsDirectory);
    return postNames.map(postName => {
        // The returned list is not just an array of strings — it must be an array of objects
        return {
            // Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
            params: {
                id: postName.replace(/\.md$/, '')
            }
        }
        // Returns an array that looks like this:
        // [
        //   {
        //     params: {
        //       id: 'ssg-ssr'
        //     }
        //   },
        //   {
        //     params: {
        //       id: 'pre-rendering'
        //     }
        //   }
        // ]
    })
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    // Use gray-matter to parse the post metadata section
    const fileContentsMatter = matter(fileContents)
    // Convert the Markdown content (fileContentsMatter.content) into HTML
    // `remark()` creates a new remark processor, and `.use(html)` enables the transformation of Markdown to HTML.
    const processedContent = await remark().use(html).process(fileContentsMatter.content);
    // Convert the processed HTML content into a string
    // `processedContent` is an asynchronous Node stream. To obtain the final HTML content as a string, we use `.toString()`.
    const contentHtml = processedContent.toString();
    // combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(fileContentsMatter.data as { date: string; title: string })
    }
}

{/* Importing Modules:
It's like bringing some helpful friends who know how to handle papers and organize them.

Setting the Folder Location:
You tell your friends the exact spot where the folder is kept, so they know where to look for the papers.

Getting Ready to Organize:
You and your friends get ready to start organizing the papers.

Reading the Paper Names:
You and your friends start looking at each paper in the folder and noting down their names.

Collecting Information from the Papers:
You and your friends read the special information written on each paper, like dates and other important details.

    Extracting the paper's ID:
    Imagine removing the paper's label (".md") to get a clean ID.

    Determining the paper's location:
    Think of it as knowing where the paper is stored in the filing cabinet.    

    Reading the paper's contents:
    Just like opening the paper and reading what's written inside.

    Parsing the paper's special information:
    It's like going through the paper and picking out the important details.

        Combining all the information about the paper

Sorting the Papers by Date:
You and your friends put the papers in order based on their dates. The newest paper comes first, followed by the older ones.

Returning the Organized Papers:
You and your friends give back the papers, but this time they are arranged nicely based on their dates. Now you can easily find the papers you need.

That's how the code works! It helps you organize papers (markdown files) by their dates (metadata) so that you can find them easily when needed. */}