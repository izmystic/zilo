const mongoose = require('mongoose')
const fs = require('fs')
const mongoEventFiles = fs.readdirSync('./src/mongoEvents').filter(file => file.endsWith('.js'))

module.exports = (client) => {
  client.dbLogin = async () => {
    for (file of mongoEventFiles) {
      const event = require(`../mongoEvents/${file}`)
      if (event.once) {
        mongoose.connection.once(event.name, (...args) => event.execute(...args))
      } else {
        mongoose.connection.on(event.name, (...args) => event.execute(...args))
      }
      console.log(`Loaded Mongo Event ${event.name}`)
    }
    mongoose.Promise = global.Promise
    mongoose.set('strictQuery', true);
    await mongoose.connect((client.config.mongoURi), {
      // useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
  }
}