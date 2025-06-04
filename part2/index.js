const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Note = require('./models/note')


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Servidor todo piola</h1>')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then( notes => res.json(notes))
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})


app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = new Note({
    content: body.content,
    important: Boolean(body.important) || false,
  })

  note.save().then( savedNote => response.json(savedNote))
  
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
});
