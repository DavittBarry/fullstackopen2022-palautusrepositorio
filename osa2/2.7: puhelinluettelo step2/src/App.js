import { useState } from 'react'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
  // console.log(event.target.value);
  setNewName(event.target.value);
};

// addPerson funktio päivittää persons:in nimilista, ja samalla se tarkistaa jos nimi on jo laitettu.

const addPerson = (event) => {
    event.preventDefault();
    // console.log('button clicked', event.target);
    const personObject = {
      name: newName
    };
    const namemap = persons.map(person => person.name)
    if (namemap.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    // console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleInputChange} 
          />
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
      <ul>
        {persons.map(person =>
          <List key={person.name} person={person} />
        )}
      </ul>
    </div>
  );
};

export default App;