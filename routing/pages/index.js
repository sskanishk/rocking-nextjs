import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {

  const router = useRouter()
  const handleChange = () => {
    // router.push('/product')
    router.replace('/product')
  }

  return(
    <div>
      <h1>HOme Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <hr/>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <div>
        <button onClick={handleChange}>Go to product page</button>
      </div>
    </div>
  )
}

export default Home