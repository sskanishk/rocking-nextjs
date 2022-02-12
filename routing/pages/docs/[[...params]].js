import { useRouter } from 'next/router'

function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  return<>
    <h1>Docs</h1>
    <p>
      {JSON.stringify(params)}
    </p>
  </>
}

export default Doc