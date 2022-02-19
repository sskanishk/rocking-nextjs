import Footer from "@/layout/Footer"
import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>About Page Title</title>
        <meta name="description" title="Hello Page title"/>
      </Head>
      <h1>About</h1>
    </>
  )
}

export default About

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}