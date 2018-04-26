const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const router = express.Router()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`) // eslint-disable-line no-console
})
