import Link from "next/link"

function PostList( {posts} ) {
  return(
    <>
      <h1>Lists of Posts</h1>
      {
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.id} {post.title}</h2>
              <Link href={`/posts/${post.id}`} passHref>
                <a>go to post</a>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}
export default PostList


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  // getstaticProps should return an object and object should contain a props key which is an object
  return {
    props: {
      // posts: data.slice(0, 3)
      posts: data   // Lasy Loading kind of
    }
  }
}