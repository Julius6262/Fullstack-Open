import React from 'react';

const CountryList = ({filteredCountry, countryBasicData}) => (
  <ul>
    {filteredCountry.map(country => 
      <span key={country}> {country} <br></br></span>
    )}
  </ul>
);

const SingleCountry = ({countryBasicData, filteredCountry}) => {
  if (!countryBasicData) return null;

  return (
    <div>
      <h2>{filteredCountry}</h2>
      <p>capital: {countryBasicData.capital}</p>
      <p>Area: {countryBasicData.area} sq km</p>
      <p>Languages: </p>
      <ul>
      {countryBasicData.languages.map((langues)=>
      <li key={langues}> {langues} </li>
      )}
      </ul>
      <img src={countryBasicData.flag} alt={`Flag of ${countryBasicData.capital}`} />
    </div>
  );
};

const ManyCountries = () => <p>Input more letters to show countries.</p>;

const NoCountries = () => <p>No countries found.</p>;

const DisplayCountry = ({filteredCountry, countryBasicData}) => {
  if (filteredCountry) {
    if(filteredCountry.length > 1 && filteredCountry.length <= 10){
      return <CountryList filteredCountry={filteredCountry} />;
    } else if(filteredCountry.length === 1){
      return <SingleCountry countryBasicData={countryBasicData} filteredCountry= {filteredCountry}/>;
    } else if(filteredCountry.length > 10){
      return <ManyCountries />;
    } else {
      return <NoCountries />;
    }
  }
  return null;
};
export default DisplayCountry;
