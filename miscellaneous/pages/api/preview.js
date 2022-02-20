
export default function handler(req, res) {
  res.setPreviewData({ user: 'kanish'})
  // res.end("Prebiew mode enabled")

  // http://localhost:3000/api/preview?redirect=/news ------redirect----> http://localhost:3000/news
  // Set cokkies - preview mode cookie
  res.redirect(req.query.redirect)
}
