function News({ data }) {
  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default News

// pass data at build time
export async function getStaticProps(context) {
  console.log('runnning get static props', context.previewData)
  return {
    props: {
      data: context.preview 
      ? 'List of draft123 articles'
      : 'List of published articles'
    }
  }
}