const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('You need at least the password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://roopepaukku_db_user:${password}@fso-cluster.4bbhdq9.mongodb.net/?retryWrites=true&w=majority&appName=fso-cluster`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  // List all entries
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  // Add new entry
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('Invalid number of arguments')
  mongoose.connection.close()
  process.exit(1)
}