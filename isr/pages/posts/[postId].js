import {useRouter} from 'next/router'

function Post({post}) {
  const router = useRouter()

  if(router.isFallback) {
    return <h2>Loading..</h2>
  }
  return(
    <>
      <div>
        <h2>{post.id}  {post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  )
}

export default Post


export async function getStaticPaths() {

  let paths = [
    {
      params: { postId: '1'}
    },
    {
      params: { postId: '2'}
    },
    {
      params: { postId: '3'}
    }
  ]

  // true and blocking are same
  // only true render loading page while fetching non-prerender page
  // blocking take time to fetch that non pre render page 
  // instead of showing or rendering loading page

  return {
    paths,
    fallback: 'blocking'    // enum: [true, false, 'blocking']
  }
}


export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()

  // Return 404 when data is not coming
  if(!data.id) {
    return {
      notFound: true
    }
  }
  
  // getstaticProps should return an object and object should contain a props key which is an object
  return {
    props: {
      post: data
    }
  }
}