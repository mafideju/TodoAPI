var mongoose = require('mongoose')


mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/Bandas', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })
mongoose.connect('mongodb://localhost:27017/Perna01', { useNewUrlParser: true })



module.exports = { mongoose }