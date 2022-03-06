// Next.js libraries
import Head from 'next/head'

// Custom Components
import BackToHome from '../components/BackToHome'

// Page component
export default function StaticSideGeneration({ jsonData }) {
  return (
    <>
      <Head>
        <title>Static-Site Generation (SSG)</title>
        <meta name="description" content="Example page using Static-Site Generation (SSG) with Next.js 11 and React 17"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Static-Site Generation (SSG)</h1>
      <p>Data fetched at build-time on the server-side before sending to the client.</p>
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
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonData = await res.json()

  return {
    props: {
      jsonData, // will be passed to the page component as props
    },
  }
}