import Link from "next/link"

function ProductList({productId = 100}) {
  return <>
    <h1>ProductList Page</h1>

    <div>
      <Link href="/">
        Home
      </Link>
    </div>


    <div>
      {
        [1,2,3,4].map((i) => {
          return(
            <div key={i}>
            <Link href={`/product/${i}`}>
              <a>Product {i}</a>
            </Link>
            </div>
          )
        })
      }

      {/* replace = current history instead adding new url prop */}
      <Link href={`/product/${productId}`} replace>
        <a>Product {productId}     </a>
      </Link>
    </div>
  </>
}

export default ProductList