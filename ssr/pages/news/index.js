function NewsArticleList({articles}) {
  return(
    <>
      <h1>News Article List</h1>
      {
        articles.map((article) => {
          return(
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.category}</p>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

export default NewsArticleList


export async function getServerSideProps() {

  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  return {
    props: {
      articles: data 
    }
  }
}