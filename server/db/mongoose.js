var mongoose = require('mongoose')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Bandas', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })


module.exports = { mongoose }