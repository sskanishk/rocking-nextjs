export default function handler(req, res){
  res.clearPreviewData()
  res.end("preview mode disabled")
}