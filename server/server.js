const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3333

app.use(bodyParser.json())

// Define the path to the static HTML file
const staticFilePath = path.join(__dirname, '../demo')

// Use express.static middleware to serve the static file
app.use(express.static(staticFilePath))

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFilePath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
