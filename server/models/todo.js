var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// var newTodo = new Todo({
//   text: 'Realizar',
//   completed: true,
//   completedAt: 1983
// })
// newTodo.save().then(doc => {
//   console.log('Salvou', doc)
// }, (err) => {
//   console.log('Erro', err)
// })


module.exports = { Todo }
