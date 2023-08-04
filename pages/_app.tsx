import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { AppProps } from "next/app"
import { useState } from "react"
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-rubik'
})

// To support caching queries on the server and set up hydration
// Caching queries on the server means storing data(cache) fetched from the server so it can be quickly reused when the same information is needed again, saving time and reducing server workload.
// Setting up hydration means providing your web app with cached data from the server immediately when it loads in the user's browser, avoiding extra requests and speeding up the app's initial display.
// Now you are ready to prefetch some data in your pages with either getStaticProps (for SSG) or getServerSideProps (for SSR).

// Apart from running the following code on the client, Next.js runs it on the server as well

// MyApp takes two props, Component and pageProps of type AppProps
const MyApp = ({ Component, pageProps }: AppProps) => {
    // state variable which holds an instance of QueryClient, which helps us interact with cache
    // we are creating the QueryClient instance inside the app on React state (you can use useRef as well). This ensures that data is not shared between different users and requests, while still only creating the QueryClient once per component lifecycle.
    // The reason for using useState in this case is to make sure that the QueryClient instance is created only once and is not re-created on each render of the component. When the component re-renders due to state or prop changes, the useState hook will return the previously created QueryClient instance, so the state is effectively persistent across re-renders.
    const [queryClient] = useState(() => new QueryClient);

    return (
        // QueryClientProvider lets us share cache with all the components it wraps
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <main className={`${inter.variable} font-rub`}>
                    <Component {...pageProps} />
                </main>

            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
export default MyApp;