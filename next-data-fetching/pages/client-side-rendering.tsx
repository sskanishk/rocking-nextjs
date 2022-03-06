// React
import { useEffect, useState } from 'react'

// Next.js
import Head from 'next/head'

// Custom Components
import BackToHome from '../components/BackToHome'

// Page component
function ClientSideRendering() {

  const [state, setState] = useState([] as any)

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await res.json()
    setState(jsonData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Client-Side Rendering (CSR)</title>
        <meta name="description" content="Example page using Client-Side Rendering (CSR) with Next.js 11 and React 17"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BackToHome/>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>Data fetched on the client-side only.</p>
      <ul>
      {
        state.map((e) => (
          <li key={e.id}>{e.email}</li>
        ))
      }
      </ul>
    </>
  )
}

export default ClientSideRendering