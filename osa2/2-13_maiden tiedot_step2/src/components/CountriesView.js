import React from 'react'

const CountriesView = ({ countriestoshow, handleInputChange }) => {
    return(
    <ul>
        {countriestoshow.map(country => <li key={country.name.common}>{country.name.common} {' '} 
        <button
        value={country.name.common}
        onClick={handleInputChange}>Show
        </button></li>)}
    </ul>
    )
};

export default CountriesView