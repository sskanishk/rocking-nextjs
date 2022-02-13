import Link from "next/link"

function ProductList( {products} ) {
  return(
    <>
      <h1>Lists of products</h1>
      {
        products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.id} {product.product} {product.price}</h2>
              <Link href={`/products/${product.id}`} passHref>
                <a>go to product</a>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}
export default ProductList


export async function getStaticProps() {

  console.log("generating / regenearting product list page")
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  // getstaticProps should return an object and object should contain a props key which is an object
  return {
    props: {
      // products: data.slice(0, 3)
      products: data   // Lasy Loading kind of
    },
    revalidate: 10  // asking nextjs to revalidate product list page in every 10 sec
  }
}