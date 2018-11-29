var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { Banda } = require('./models/bandas');

var app = express();

var port = 6789;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc)
  }).catch((err) => {
    res.status(400).send(err)
  })
});


app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({ todos })
  }).catch(err => res.status(400).send(err))
});


app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validação do id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then(todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({ todo })
  }).catch(err => {
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`Servidor Rodando na ${port}`)
});

module.exports = { app }