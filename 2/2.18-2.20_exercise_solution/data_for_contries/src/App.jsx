import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import DisplayCountry from './components/DisplayCountry'



function App() {
  // input values should be an empty string
  const [newSearchWord, setNewSearchWord] = useState(null)
  const [countryName, setCountryName] = useState(null)
  const [filteredCountry, setFilteredCountry] = useState(null)
  const [countryBasicData, setCountryBasicData] = useState(null)
  

  // fetch data from the API and save the names as and array in countryName
  useEffect(() => {
    if (newSearchWord){
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const names = response.data.map(country =>
          country.name.common.toLowerCase()); // every country is lowercase for easier searching 
        setCountryName(names)
      })
      .catch(error => {
        console.log('failed to fetch data for all the countries')
      })
    }
    
  },[newSearchWord])

  // seaching for a country
  useEffect(()=> {
    if (countryName){
      const filteredC = countryName.filter(country => country.includes(newSearchWord.toLowerCase()));
      setFilteredCountry(filteredC);
    }
    
    
  }, [newSearchWord, countryName])

  const handleInputChangeSearchWord = (event) =>{
    setNewSearchWord(event.target.value) 
  }

  useEffect(() => {
    if (filteredCountry && filteredCountry.length === 1){
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filteredCountry[0]}`)
      .then(response => {
        const countryinfo = response.data;
        const data = {
          capital: countryinfo.capital[0],
          area: countryinfo.area,
          flag: countryinfo.flags.png,
          languages: Object.values(countryinfo.languages)
        };
          setCountryBasicData(data)
      })
      .catch(error => {
        console.log('fail to get the specifik country data')
      })
    }
  }), [filteredCountry]
    

  return(
    // Some JSX
    <div>
      <span>find countries </span>
      <input value={newSearchWord || ''} onChange={handleInputChangeSearchWord}></input>
      <div>
        <DisplayCountry filteredCountry={filteredCountry} countryBasicData={countryBasicData}/>
      </div>
    </div>
  )
  }

export default App
