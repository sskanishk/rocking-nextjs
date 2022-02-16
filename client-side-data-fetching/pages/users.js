import User from "../components/user"

function UserList(props) {
  return(<>
    <h1>List of User List x</h1>
    <div>
      {
        props.users.map((item) => {
          return (
            <div key={item.id}>
              <User user={item}/>  
            </div>
          )
        })
      }
    </div>
  </>)
}
export default UserList

// 


// getStaticProps - this can use to insert props in the components
// it only run on the server side
// this function wont run on the clinet side
// this function is not included in the js bundle of the browser

// you can write server side code directly in the getstaticprops
// accessing the file system ( fs module ) and querying in db can be done inside the getstaicprops
// API key are also safe in getstaicProps function

// getstaticProps only allowed in the page not in any other reagular file or component
// It used only for prerendering not for the client side rendering

// getsaticprops is run only build time.


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  
  // getstaticProps should return an object and object should contain a props key which is an object
  return {
    props: {
      users: data
    }
  }
}


