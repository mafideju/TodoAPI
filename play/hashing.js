console.time('hashing')
const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = 'a';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash)
  });
});


// var message = 'Marcio';
// var hash = SHA256(message);

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`);
// console.log(`JWT: ${jwt}`);

// const data = {
//   id: 10
// }

// const token = jwt.sign(data, 'segredo')
// console.warn(token)

// const decoded = jwt.verify(token, 'segredo')
// console.error(decoded)

// console.timeEnd('hashing')
