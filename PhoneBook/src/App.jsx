import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {

  const [persons, setPersons] = useState([])

  useEffect( () => {
    axios
      .get('http://127.0.0.1:3001/persons')
      .then( respose => {
        setPersons(respose.data)})
  }, [])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [Search, setSearch] = useState(false)
  const [array, setArray] = useState([])

  const handlePersons = (e) => {
    e.preventDefault()
    const isRepeated = persons.some(person => person.name === newName);

    if (isRepeated) return alert(`${newName} is al ready added to phonebook`);

    setPersons(persons.concat({ name: newName, number: newPhone }))
  }

  const changeInputName = (e) => {
    setNewName(e.target.value)
  }

  const changeInputPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const changeInputSearch = (e) => {

    const inputValue = e.target.value.toLowerCase();

    if (e.target.value === '') {
      setSearch(false)
      setArray(persons)
    } else {
      setSearch(true)
      let filterPersons = persons.filter(person => person.name.toLowerCase().includes(inputValue))
      setArray(filterPersons)
    }
  }

  const listaMostrada = Search ? array : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter event={changeInputSearch} />
      <h2>Add a new </h2>
      <PersonForm stateInputName={newName} eventName={changeInputName} stateInputPhone={newPhone} eventPhone={changeInputPhone} eventPersons={handlePersons} />
      <h2>Numbers</h2>
      <Persons array={listaMostrada} />
    </div>
  )
}

export default App
