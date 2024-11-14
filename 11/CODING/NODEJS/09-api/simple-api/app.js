const express = require('express')
const { getDb, connectToDb } = require('./db')
const cors = require('cors')
const { ObjectId } = require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())

let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

app.get('/books', (req, res) => {
    let books = []
  
    db.collection('books')
      .find()
      .sort({author: 1})
      .forEach(book => books.push(book))
      .then(() => {
        res.status(200).json(books)
      })
      .catch(() => {
        res.status(500).json({error: 'Error...'})
      })
})

app.get('/books/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
  
      db.collection('books')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
          res.status(200).json(doc)
        })
        .catch(err => {
          res.status(500).json({error: 'Could not fetch the document'})
        })
        
    } else {
      res.status(500).json({error: 'Could not fetch the document'})
    }
  
})

app.delete('/books/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
  
    db.collection('books')
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({error: 'Could not delete document'})
      })
  
    } else {
      res.status(500).json({error: 'Could not delete document'})
    }
  })