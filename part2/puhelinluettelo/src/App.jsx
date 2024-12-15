import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = ({persons}) => {
  const [personsState, setPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = personsState.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const exists = personsState.find(element => element.name === newName) !== undefined
    console.log(exists)
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
  
      setPersons(personsState.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <h3>Add a new record</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App