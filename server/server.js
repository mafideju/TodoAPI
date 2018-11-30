const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { Banda } = require('./models/bandas');
var { authenticate } = require('./middleware/authenticate')

var app = express();

var port = process.env.PORT || 6789;

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

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validação do id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then(todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({ todo })
  }).catch(err => {
    res.status(400).send();
  });
})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) return res.status(404).send();
      res.send({ todo })
    }).catch(err => res.status(400).send());
})



app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password'])
  var user = new User(body)

  console.log(body)

  user.save().then(() => {
    return user.generateAuthToken()
    // res.send(user)
  }).then(token => {
    res.header('x-auth', token).send(user)
  }).catch((err) => {
    res.status(400).send(err)
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});



app.listen(port, () => {
  console.log(`Servidor Rodando na ${port}`)
});

module.exports = { app }