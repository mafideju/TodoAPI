const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Conexão ao Mongo DB Não Estabelecida')
  } else {
    console.log('Conexão ao Mongo DB com Sucesso')
  }
  const db = client.db('TodoApp')

  // DELETE MANY = LIMPA TUDO 
  // db.collection('Todos').deleteMany({ text: "Almoçar" }).then(result => {
  //   console.log(result)
  // }).catch(err => console.warn(err))


  // DELETE ONE = LIMPA APENAS O PRIMEIRO RESULTADO
  // db.collection('Todos').deleteOne({ text: "Almoçar" }).then(result => {
  //   console.log(result)
  // }).catch(err => console.warn(err))


  // FIND AND DELETE
  db.collection('Todos').findOneAndDelete({ completed: true }).then(result => {
    console.log(result)
  }).catch(err => console.warn(err))


  // client.close()
})