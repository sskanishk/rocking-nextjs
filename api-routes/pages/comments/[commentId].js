import { comments } from "../../data/comments"

function CommentDetails({ comment }) {
  return(
    <div>
      {comment.id} | {comment.text}
    </div>
  )
}

export default CommentDetails

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' }},
      { params: { commentId: '2' }},
      { params: { commentId: '3' }}
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { commentId } = params

  const data = comments.find(comment => comment.id === parseInt(commentId))

  // DO-NOT DO THIS
  // const response = await fetch(`http://localhost:3000/api/comments/${commentId}`)
  // const data = await response.json()
  // console.log(data)

  return {
    props: {
      comment: data
    }
  }
}