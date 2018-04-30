const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

let deckNames = [
  {id: 0, name: 'Best Deck Ever'}, 
  {id: 1, name: 'Ladder Deck'},
  {id: 2, name: '2v2 Deck'},
  {id: 3, name: 'Challenge Deck'}
]

app.get('/api/favorites', (req, res) => {
  res.status(200).send(deckNames)
})

app.post('/api/deckNames', (req, res) => {
  const { selectedDeck } = req.body
    const deck = {
      id: deckNames[deckNames.length - 1].id + 1,
      name: selectedDeck.name
    }
    deckNames.push(deck)
    res.status(200).send(deckNames)
})

app.delete('/api/favorites/:id', (req,res) => {
  let id = Number(req.params.id); 
  deckNames = deckNames.filter(deck => {
    return deck.id !== id
  })
    res.status(200).send(deckNames)
  }
)

app.put('/api/favorites', (req,res) => {
  let deckIndex = null
  deckNames = deckNames.map(deck => {
    if(req.body.selectedDeck.id === deck.id){
      deck.name = req.body.selectedDeck.name
    }
    return deck
  })
  res.status(200).send(deckNames)
})


const port = 3333
app.listen(3333, console.log(`Let the games begin on port ${port}!`))