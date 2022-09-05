import React from 'react';
import Weather from './Weather';


const Country = ({ countriestoshow }) => {
 return(
  <div>
    {countriestoshow.map(country => <h1 key={country.name.common}>{country.name.common}</h1>)}
    <p><b>Capital city: </b>{countriestoshow.map(country => country.capital)}</p>
    <p><b>Area code: </b>{countriestoshow.map(country => country.area)}</p>
    <h2>Languages:</h2>
    <ul>{Object.values(countriestoshow[0].languages).map((language) => (<li key={language}>{language}</li>))}</ul>
    <img src={countriestoshow[0].flags.png} alt="countryflag"></img>
    <Weather city={countriestoshow[0].capital}/>
  </div>
 )
};

export default Country