const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Conexão ao Mongo DB Não Estabelecida')
  } else {
    console.log('Conexão ao Mongo DB com Sucesso')
  }
  const db = client.db('TodoApp')

  //   // FIND ONE AND UPDATE(filter, update, options, callback)
  //   db.collection('Todos').findOneAndUpdate({
  //     //filter
  //     _id: new ObjectID('5bfd67be2e0ebd0e6c841ae9')
  //   }, {
  //       //updates
  //       $set: {
  //         completed: true
  //       }
  //     }, {
  //       // options
  //       returnOriginal: false
  //     }).then(result => console.log(result)).catch(err => console.warn('Deu Ruim'))

  //   // client.close()
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bfd4e6c36c9273cb416955e")
  }, {
      $set: {
        name: 'Francineuda',
        age: 65,
        location: 'Campina Grande'
      }
    }, {
      returnOriginal: false
    }).then(result => console.log(result)).catch(err => console.warn('Deu Ruim'))

  // client.close()
})