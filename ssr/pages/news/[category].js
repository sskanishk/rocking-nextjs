function ArticleListByCategory({articles, category}) {
  return (
    <>
      <h1>Showing news for category <i>{category}</i></h1>
      {
        articles.map((article) => {
          return(
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>{article.category}</p>
              <hr />
            </div>
          )
        })
      }
    </>
  )

}
export default ArticleListByCategory

export async function getServerSideProps(context) {
  const { params, req, res } = context

  // set cookies
  res.setHeader('Set-Cookie', ['name=kanish'])

  const { category } = params
  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()

  return {
    props: {
      articles: data,
      category
    }
  }
}