import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  
  

  const handleInput = (e) => {
    const input = e.target.value.toLowerCase()
    // setSearch(e.target.value)
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(input))
    setFilteredCountries(filtered)
  }

  useEffect(() => {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => setCountries(response.data))
  }, [])
  
  // useEffect(() => {
  //   if (search) {
      
  //   }
    
  // }, [search])

  return (
    <>
    <div>
      find countries <input type="text" onChange={handleInput} />
    </div>
    {countries.length > 10 && (<p>Too many matches, specify another filter</p>)}
    {filteredCountries.map( country => <li>{country.name.common}</li>)}
    </>
  )
}

export default App
