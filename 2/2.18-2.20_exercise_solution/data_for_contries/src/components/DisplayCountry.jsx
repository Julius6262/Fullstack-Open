import React from 'react';

const CountryList = ({filteredCountry, setSelectedCountry}) => (
  <div>
    {filteredCountry.map(country => 
      <div key={country}>
        <span>{country.charAt(0).toUpperCase() + country.slice(1)}</span>
        <button onClick={() => setSelectedCountry(country)}>show</button>
      </div>
    )}
  </div>
);


const SingleCountry = ({countryBasicData}) => {
  if (!countryBasicData[0] ) return null;
  console.log('SingleCountry runs')
  return (
    <div>
      {countryBasicData.map((countryData, index) => (
        <div key={index}>
          <h2>{countryData.name.charAt(0).toUpperCase() + countryData.name.slice(1)}</h2>
          <p>capital: {countryData.capital}</p>
          <p>Area: {countryData.area} sq km</p>
          <p>Languages: </p>
          <ul>
            {countryData.languages.map((language)=>
              <li key={language}> {language} </li>
            )}
          </ul>
          <img src={countryData.flag} alt={`Flag of ${countryData.capital}`} />
          <h3>Weather in {countryData.capital}</h3>
          <p>{countryData.weatherData}</p>
        </div>
      ))}
    </div>
  );
};




const ManyCountries = () => <p>Input more letters to show countries.</p>;

const NoCountries = () => <p>No countries found.</p>;

const DisplayCountry = ({filteredCountry, countryBasicData, selectedCountry, setSelectedCountry}) => {
  if (filteredCountry) {
    if(filteredCountry.length > 1 && filteredCountry.length <= 10){
      return (
        <div>
          <CountryList filteredCountry={filteredCountry} setSelectedCountry={setSelectedCountry} />
          {selectedCountry && <SingleCountry countryBasicData={countryBasicData.filter(country => country.name.toLowerCase() === selectedCountry)} />}
        </div>
      );
    } else if(filteredCountry.length === 1){
      return <SingleCountry countryBasicData={countryBasicData} />;
    } else if(filteredCountry.length > 10){
      return <ManyCountries />;
    } else {
      return <NoCountries />;
    }
  }
  return null;
};

export default DisplayCountry;
