import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Next Js Pre render</h1>
        <div>
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </div>
        <div>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </div>
        <div>
          <Link href='/products'>
            <a>Products</a>
          </Link>
        </div>
        <div>
          <Link href='/news'>
            <a>News</a>
          </Link>
        </div>
    </div>
  )
}
