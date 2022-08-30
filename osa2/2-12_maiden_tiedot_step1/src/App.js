import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ newSearch, handleInputChange }) => {
    return (
        <div>Search by name:<input value={newSearch} onChange={handleInputChange}/>
        </div>
    );
};

const Country = ({ countriesToShow }) => {
 return(
  <div>
    {countriesToShow.map(country => <h1 key={country.name.common}>{country.name.common}</h1>)}
    <p><b>Capital city: </b>{countriesToShow.map(country => country.capital)}</p>
    <p><b>Area code: </b>{countriesToShow.map(country => country.area)}</p>
    <h2>Languages:</h2>
    <ul>{Object.values(countriesToShow[0].languages).map((language) => (<li key={language}>{language}</li>))}</ul>
    <img src={countriesToShow[0].flags.png} alt="countryflag"></img>
  </div>
 )
}

const Show = ({ countriesToShow, newSearch }) => {
  //console.log(countriesToShow);
  // Jos käyttäjä ei ole laittanut mitään hakukennälle, tulee ilmoitus siitä. Sitten jos on liikaa (yli 10) ilmestyy toinen. 

  if (newSearch.length === 0) return (<p>Please use search function to begin.</p>)
  else if (countriesToShow.length > 10) return (<p>Too many results, please specify.</p>)
  else if (countriesToShow.length === 1) return (<Country countriesToShow={countriesToShow}/>)
  else return (
        <ul>
            {countriesToShow.map(country => <li key={country.name.common}>{country.name.common}</li>)}
        </ul>
    );
};

const App = () => {
  const [countries, setCountry] = useState([]); 
  const [newSearch, setNewSearch] = useState('');
  const [showSearch, setSearchState] = useState(true);

  useEffect(() => {
    //console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
        //console.log(response.data)
      })
  }, [])

  const handleInputChange = (event) => {
  // console.log(event.target.value);
  setSearchState(false);
  console.log(showSearch);
  setNewSearch(event.target.value);
};

const countriesToShow = newSearch === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()));
      

    return (
    <div>
      <Search newSearch={newSearch} handleInputChange={handleInputChange}/>
      <Show countriesToShow={countriesToShow} newSearch={newSearch}/>
    </div>
  );
};

export default App;