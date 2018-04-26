const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

const DIST_DIR = path.join(__dirname, 'src')
const PORT = process.env.PORT || 3000

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`) // eslint-disable-line no-console
})
