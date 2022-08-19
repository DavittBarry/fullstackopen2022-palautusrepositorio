import { useState } from 'react';
import Show from './components/Show';
import Filter from './components/Filter';
import Name from './components/Name';
import Number from './components/Number';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewfilter] = useState('');
  const [showAll, setShowAll] = useState(true);

// filterInput laittaa showAll:n tila epätosiksi, joka asettaa filteri persons:lle.

  const filterInput = (event) => {
    setShowAll(false);
    setNewfilter(event.target.value);
    
    console.log(newFilter);
    console.log(showAll);
  };

  const personsToShow = newFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())
  )
  //console.log(persons);

  const handleInputChange = (event) => {
  // console.log(event.target.value);
  setNewName(event.target.value);
};

  const handleNumberChange = (event) => {
  // console.log(event.target.value);
  setNewNumber(event.target.value);
};

// addPerson funktio päivittää persons:in nimilista, ja samalla se tarkistaa jos nimi on jo laitettu.

const addPerson = (event) => {
    event.preventDefault();

    // console.log('button clicked', event.target);

    const personObject = {
      name: newName,
      number: newNumber
    };

    const namemap = persons.map(person => person.name)
      if (namemap.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');

    // console.log(persons);
  };

  return (
    <div>

      <h2>Phonebook</h2>

      <form>
        <div>
          <Name newName={newName} handleInputChange={handleInputChange} />
          <br/>
          <Number newNumber={newNumber} handleNumberChange={handleNumberChange} />
          <br/>
          <button 
            type="submit" 
            value={newName} 
            onClick= {function(event){
              addPerson(event);
              }}>
              add
          </button>
        </div>
      </form>

      <h2>Numbers</h2>

      <Filter newFilter={newFilter} filterInput={filterInput}/>
      <Show personsToShow={personsToShow} />

    </div>
  );
};

export default App;