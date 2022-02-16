import {useState} from 'react'
import {useRouter} from 'next/router'

function Event({ eventList }) {
  const [events, setEvents ] = useState(eventList)
  const router = useRouter()

  const fetchEvent = async (eventCategory) => {
    const response = await fetch(`http://localhost:4000/events?category=${eventCategory}`)
    const data = await response.json()
    setEvents(data)
    router.push(`/events?category=${eventCategory}`, undefined, { shallow: true })
  }

  return (
    <>
      <h1>Showing Events</h1>
      
      <button onClick={() => fetchEvent('sports')}>Sports </button>
      <button onClick={() => fetchEvent('technology')}>Technology </button>
      <button onClick={() => fetchEvent('food')}>Food </button>
      <button onClick={() => fetchEvent('politics')}>Politics </button>
      <button onClick={() => fetchEvent('media')}>Media </button>

      {
        events.map((event) => {
          return(
            <div key={event.id}>
              <h3>{event.id}. {event.title} | {event.category}</h3>
              <p>{event.description}</p>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}
export default Event



export async function getServerSideProps(context) {
  const { params, req, res, query } = context
  const { category } = query
  const querystring = category ? `category=${category}` : ''

  const response = await fetch(`http://localhost:4000/events?${querystring}`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}