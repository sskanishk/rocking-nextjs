import {useRouter} from 'next/router'

function Product({product}) {
  const router = useRouter()

  if(router.isFallback) {
    return <h2>Loading..</h2>
  }
  return(
    <>
      <div>
        <h2>{product.id}  {product.product} {product.price}</h2>
        <p>{product.description}</p>
      </div>
    </>
  )
}

export default Product


export async function getStaticPaths() {

  let paths = [
    {
      params: { productId: '1'}
    },
    // {
    //   params: { productId: '2'}
    // },
    // {
    //   params: { productId: '3'}
    // }
  ]

  // true and blocking are same
  // only true render loading page while fetching non-prerender page
  // blocking take time to fetch that non pre render page 
  // instead of showing or rendering loading page

  return {
    paths,
    fallback: true    // enum: [true, false, 'blocking']
  }
}


export async function getStaticProps(context) {
  const { params } = context

  console.log("regenerating new product deatils page")

  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
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
      product: data
    },
    revalidate: 10 //seconds
  }
}