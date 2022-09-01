import React from 'react';
import CountriesView from './CountriesView';
import Country from './Country';

const Show = ({ countriestoshow, newSearch, handleInputChange }) => {

  //console.log(countriesToShow);

  // Jos käyttäjä ei ole laittanut mitään hakukennälle, tulee ilmoitus siitä. Sitten jos on liikaa (yli 10) ilmestyy toinen. 

    if (newSearch.length === 0) return (<p>Please use search function to begin.</p>)
    else if (countriestoshow.length > 10) return (<p>Too many results, please specify.</p>)
    else if (countriestoshow.length !== 1) return (<CountriesView  
                                                        countriestoshow={countriestoshow} 
                                                        handleInputChange={handleInputChange} 
                                                    />)
    else if (countriestoshow.length === 1) return (<Country 
                                                        countriestoshow={countriestoshow}
                                                    />)
    else return (
        <ul>
            {countriestoshow.map(country => <li key={country.name.common}>{country.name.common}</li>)}
        </ul>
    );
};

export default Show