var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  company: String,
  phone: String,
  email: String,
  accountnumber: String,
  status: String,
  b_address: String,
  b_address2: String,
  b_city: String,
  b_state: String,
  b_zip: Number,
  logo: { data: Buffer, contentType: String }
})

var Client = mongoose.model('Client', clientSchema)
 
module.exports = Client;