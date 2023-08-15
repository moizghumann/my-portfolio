---
title: 'Hydration and Dehydration in SSG'
date: '2023-07-17'
---

We need to understand static site generation (SSG) and hydration first.

## Static Site Generation (SSG):
Static site generation is a process used in Next.js to generate pre-rendered HTML pages during build time. When you use SSG, Next.js fetches data during the build process and generates HTML files for each page in your application. These HTML files can then be served directly to users, making the website load faster since the content is already available in the HTML.

## Dehydration:

- Dehydration is a process where React Query takes the pre-fetched data from its cache during build time and converts it into a JSON format.
- JSON is just a way to represent data in a structured format that can be easily understood and used by computers.

## Embedding in HTML:

- After converting the data to JSON, React Query includes this JSON data in the HTML of the statically generated page. This means that when the page is first created on the server, it already contains the preloaded data in JSON format.
- So, when a user visits the page, they get the preloaded data along with the HTML. This makes the page load faster because the data is already there, and there's no need to make an extra request to the server just to get the initial data.

## Hydration:

- Hydration process happens during the initial page load.
- The client-side JavaScript code in the browser takes the preloaded data (dehydrated JSON) embedded in the HTML and hydrates the React Query cache.
- Once the data is hydrated, the app can now use the cached data just like it would if it had fetched it from the server. This helps avoid unnecessary server requests and improves the user experience.

In summary, dehydration is a process in React Query that converts cached data into JSON and embeds it into the HTML of statically generated pages. When the page is loaded, the JSON data is used to hydrate the client-side cache, allowing the app to use preloaded data and avoid unnecessary server requests. This combination of dehydration and hydration helps make the app faster and more efficient in handling data.

## Thought Process:

1. The `getStaticProps` function is a special function in Next.js used for static site generation. It is asynchronous and runs at build time to fetch data and pass it as props to the page component.
2. Inside `getStaticProps`, a new instance of `QueryClient` is created, which is a part of the React Query library. The `QueryClient` is responsible for managing the caching and fetching of data using the React Query hooks.
3. The `prefetchQuery` function from React Query is used to fetch the data for the 'posts' query key and store it in the `queryClient` cache. This fetches the data during the build process, and the result is available in the cache when the page is served to users.
4. After prefetching the data, the `dehydrate` function from React Query is called with the `queryClient` as an argument. This function serializes the data in the cache into a JSON format.
5. The dehydrated state is then returned as a prop in the `getStaticProps` function. This means that when the page is served, the serialized data is embedded in the HTML.
6. When a user visits the page, the static HTML is sent to the browser. The React Query library is also loaded on the client-side.
7. Once the page is loaded, the JavaScript code (React) takes over and hydrates the page. The React Query library reads the dehydrated data embedded in the HTML and populates the `queryClient` cache with this data. This way, the React Query hooks can access the preloaded data without making additional server requests.

- ### Data fetching pipeline
    - The initial data fetching occurs in **`getStaticProps`** through the use of **`prefetchQuery`**. During server-side rendering (SSR) at build time, Next.js executes the **`getStaticProps`** function, which runs the **`usePokemon`** function (with the help of **`prefetchQuery`**) to fetch data from the API and cache it on the server. The fetched data is then serialized and passed to the client as part of the **`dehydratedState`**.
    - Once the app runs on the client-side (after hydration), the **`Hydrate`** component in **`MyApp`** receives the **`dehydratedState`** and uses it to populate the client-side cache with the cached data from the server.
    - After hydration, the **`useQuery`** hook in **`usePokemon`** is responsible for cache management. It will handle subsequent data fetches and updates based on the cache's state. If the cached data becomes stale (expired), the **`useQuery`** hook will automatically trigger a new fetch to update the data in the cache.
    - To summarize, the **`prefetchQuery`** function is used in **`getStaticProps`** for initial data fetching during server-side rendering (SSR) at build time, while the **`useQuery`** hook is responsible for cache management and handling subsequent data fetches on the client-side after hydration

```tsx
// pages/_app.tsx
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"
import { useState } from "react"
import '../styles/globals.css'

// part from running the following code on the client, Next.js runs it on the server as well

// MyApp takes two props, Component and pageProps of type AppProps
const MyApp = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient);

    return (
        // QueryClientProvider lets us share cache with all the components it wraps
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
export default MyApp;
```

```tsx
// pages/posts.jsx
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: otherData } = useQuery({
    queryKey: ['posts-2'],
    queryFn: getPosts,
  })

  // ...
}
```

In summary, the code above uses React Query's `prefetchQuery` and `dehydrate` functions to fetch data during the build process and serialize it into the HTML. When the page is served, the data is already available in the client-side cache, allowing for instant access to the data without additional network requests. This combination of static site generation and hydration helps optimise the performance and user experience of the website.