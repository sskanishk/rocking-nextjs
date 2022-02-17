import { useState } from 'react'

function CommentsPage() {

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()

    setComments(data)
  }

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    console.log(data) 
  }

  const deletComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    fetchComments()
  }

  console.log(" ==> ", comments)

  return (
    <>
      <button onClick={fetchComments}>Get Comments</button>
      <div>
        <input 
          type='text'
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit Comment</button>
      </div>
      <div>
        {
          comments.length > 0
          ? comments?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.text}</p>
                <button onClick={() => deletComment(item.id)}>Delete</button>
              </div>
            )
          })
          : <h3>NO DATA</h3>
        }
      </div>
    </>
  )
}

export default CommentsPage