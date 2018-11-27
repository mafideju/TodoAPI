const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Conexão ao Mongo DB Não Estabelecida')
  }
  console.log('Conexão ao Mongo DB com Sucesso')
  const db = client.db('TodoApp')

  //   db.collection('Todos').insertOne({
  //     text: 'Aplicativo para Registrar Tarefas',
  //     completed: false
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log('Não Foi Possível Inserir a Tarefa', err)
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //   })

  db.collection('Users').insertOne({
    name: 'Marcio',
    age: 35,
    location: 'São Bernardo do Campo'
  }, (err, result) => {
    if (err) console.log('Não Foi Possível Adicionar o Usuário', err)
    else console.log(JSON.stringify(result.ops, undefined, 2))
  })

  client.close()
})