import {useRouter } from 'next/router'

function ReviewDetails() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return <h1>ReviewDetails Page ---- Pro_ID - {productId}  -----   Review Id - {reviewId}</h1>
}

export default ReviewDetails