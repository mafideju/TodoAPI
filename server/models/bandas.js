var mongoose = require('mongoose');


var Banda = mongoose.model('Bandas', {
  banda: {
    type: String,
    require: true,
    trim: true,
    minlength: 2
  },
  obraprima: {
    type: String,
    trim: true,
    minlength: 2
  },
  masterpiece: {
    type: String,
    trim: true,
    minlength: 2
  },
  integranteIlustre: {
    type: String,
    trim: true,
    minlength: 2
  },
})


// var newBanda = new Banda({
//   banda: 'Alice In Chains',
//   obraprima: 'Dirt',
//   masterpiece: 'Man In The Box',
//   integranteIlustre: 'Jerry Cuntrell'
// })
// var newBanda2 = new Banda({
//   banda: 'Morcheeba',
//   obraprima: 'Parts of the Process',
//   masterpiece: 'The Sea',
//   integranteIlustre: 'Skye Edwards'
// })

// newBanda.save().then(doc => {
//   console.log('Data Registered', doc)
// }).catch(err => {
//   console.warn('Data Lost', err)
// })

// newBanda2.save().then(doc => {
//   console.log('Data Registered', doc)
// }).catch(err => {
//   console.warn('Data Lost', err)
// })

module.exports = { Banda }
