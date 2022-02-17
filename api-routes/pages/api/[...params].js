export default function handler(req, res) {
  
  const { params } = req.query
  console.log('params ===> ',params)
  res.status(200).json(params)

}



// [...params].js
// catch all routes
// if there is no index.js in api folder ...3000/api - sthrow 404

// [[...params]].js
// optional catch all routes
// if there is no index.js in api folder ...3000/api - dont throw 404