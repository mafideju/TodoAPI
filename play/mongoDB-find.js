const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Conexão ao Mongo DB Não Estabelecida')
  } else {
    console.log('Conexão ao Mongo DB com Sucesso')
  }
  const db = client.db('TodoApp')

  // db.collection('Todos').find({ _id: new ObjectID('5bfd46a6a33b693b58a90539') }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }).catch(err => console.log('Não Rolou Buscar os Todos, erro:', err))

  db.collection('Users').find({ name: 'Kurt' }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }).catch(err => console.warn('Não Rolou Buscar os Usuários, erro:', err))

  // client.close()
})