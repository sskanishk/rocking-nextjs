// Next.js libraries
import Head from 'next/head'

// Custom Components
import BackToHome from 'components/BackToHome'

// Page component
export default function IncrementalStaticGeneration({ jsonData }) {
  return (
    <>
      <Head>
        <title>Incremental Static Regeneration (ISR)</title>
        <meta name="description" content="Example page using Incremental Static Regeneration (ISR) with Next.js 11 and React 17"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>Data fetched at build-time on the server-side and rebuilt when data updated.</p>
      <ul>
      {
        jsonData.map((e) => (
        <li key={e.id}>{e.email}</li>
      ))
      }
      </ul>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonData = await res.json()

  return {
    props: {
      jsonData, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 100, // In seconds
  }
}