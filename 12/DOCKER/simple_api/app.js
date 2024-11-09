const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book A"
    },
    {
      "id":"2",
      "title":"Game B"
    },
    {
      "id":"3",
      "title":"Movie C"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})