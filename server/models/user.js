var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 5
  }
})


var newUser = new User({
  email: 'mafideju@outlook.com'
})

newUser.save().then(doc => {
  console.log('Data Registered', doc)
}).catch(err => {
  console.warn('Data Lost', err)
})


module.exports = { User }
