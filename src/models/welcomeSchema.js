const mongoose = require('mongoose')
const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
}

const welcomeSchema = new Schema({
    _id: reqString,
    channelId: reqString,
    text: reqString,
    roleId: reqString
})

const name = 'welcome-message'
module.exports = mongoose.models[name] || mongoose.model(name, welcomeSchema, name)