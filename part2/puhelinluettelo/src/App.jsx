import { useState, useEffect } from 'react'
import personsService from './services/persons'

const Person = ({ person, handleDelete }) => {
  return (
    <li>{person.name} {person.number}
      <button onClick={() => handleDelete(person.id)}>delete</button>
    </li>
  )
}

const App = () => {
  const [personsState, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

  const handleDelete = (id) => {
    const person = personsState.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
      .remove(id)
      .then(() => {
        setPersons(personsState.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`The person '${person.name}' was already deleted from server`)
        setPersons(personsState.filter(p => p.id !== id))
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const exists = personsState.find(element => element.name === newName) !== undefined
    console.log(exists)
    if (exists) {
      console.log(`${newName} is already added to phonebook`)
      if (window.confirm(`${newName} already exists in the phonebook. Replace the old number with a new one?`)) {
        personsService
          .update(personsState.find(p => p.name === newName).id, { name: newName, number: newNumber })
            .then(returnedPerson => {
            setPersons(personsState.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
        })
        console.log(`${newName} updated`)
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personsService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(personsState.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
      })
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
          <Person key={person.name} person={person} handleDelete={handleDelete} />
        )}
      </ul>
    </div>
  )

}

export default App