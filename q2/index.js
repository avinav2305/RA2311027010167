const express = require('express')
const app = express()
app.use(express.json())

let items = []

app.get('/items', (req, res) => res.json(items))

app.post('/items', (req, res) => {
  const { name } = req.body
  items.push({ name })
  res.status(201).json({ message: "created" })
})

app.listen(3000, () => console.log("running on 3000"))