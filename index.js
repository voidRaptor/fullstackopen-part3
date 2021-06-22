const express = require('express')
const app = express()


let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]


app.get("/info", (req, res) =>  {
  const count = `<p>Phonebook has info for ${persons.length} people</p>`
  const date = `<p>${new Date().toUTCString()}</p>`
  res.send(count + date)
})


app.get("/api/persons", (req, res) => {
  res.json(persons)
})


app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id == id)

  if (person) {
    res.json(person)

  } else {
    res.status(404).end()
  }

})


app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const index = persons.findIndex(p => p.id == id)

  if (index != -1) {
    persons.splice(index, 1)
    res.status(200).end()

  } else {
    res.status(404).end()
  }

})




const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

