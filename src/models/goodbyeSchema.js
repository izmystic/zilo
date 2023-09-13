const mongoose = require('mongoose')
const { Schema } = mongoose

const reqString = {
  type: String,
  required: true,
}

const goodbyeSchema = new Schema({
  _id: reqString,
  channelId: reqString,
  text: reqString
})

const name = 'goodbye-message'
module.exports = mongoose.models[name] || mongoose.model(name, goodbyeSchema, name)