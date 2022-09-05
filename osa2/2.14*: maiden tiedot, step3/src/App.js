import { useState, useEffect } from 'react';
import axios from 'axios';
import Show from './components/Show';
import Search from './components/Search';

//console.log(process.env.REACT_APP_API_KEY)

const App = () => {
  const [countries, setCountry] = useState([]); 
  const [newSearch, setNewSearch] = useState('');
  const [showSearch, setSearchState] = useState(true);

  useEffect(() => {

    //console.log('effect')

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        setCountry(response.data)

        //console.log(response.data)

      })
  }, []);

  const handleInputChange = (event) => {
  // console.log(event.target.value);

  setSearchState(false);

  console.log(showSearch);

  setNewSearch(event.target.value);
};

// countriestoshow toimii Boolean:essa tilassa siten, että kun filteri on aktivoitu, sitten tulee .filter.

const countriestoshow = newSearch === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()));

    return (
    <div>
      <Search 
        newSearch={newSearch} 
        handleInputChange={handleInputChange}
      />
      <Show
        countriestoshow={countriestoshow} 
        newSearch={newSearch} 
        handleInputChange={handleInputChange} />
    </div>
  );
};

export default App;