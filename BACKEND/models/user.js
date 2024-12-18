// ----------------USERS SCHEMA---------------------
console.log("Models");
const mongo = require('mongoose');
module.exports = new mongo.model('user', {
  name: String,
  phone: {
    type: String
  },
  address: {
    type: String
  },
  Date: {
    type: String,
    default: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}
${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  }
})


