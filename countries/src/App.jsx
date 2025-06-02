import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [isSingleData, setIsSingleData] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([])


  const handleInput = (e) => {
    const input = e.target.value.toLowerCase()
    // setSearch(e.target.value)
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(input))

    if (filtered.length === 1) {
      setIsSingleData(true)
    }
    setFilteredCountries(filtered)
  }

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data))
  }, [])

  return (
    <>
      <div>
        find countries <input type="text" onChange={handleInput} />
      </div>
      {filteredCountries.length > 10 || filteredCountries.length === 0
        ? (<p>Too many matches, specify another filter</p>)
        : filteredCountries.map(country => (isSingleData
          ? <Country key={country.population} country={country} single={true} />
          : <Country key={country.population} country={country} single={false} />))}
    </>
  )
}

export default App
