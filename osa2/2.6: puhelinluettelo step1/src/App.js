import { useState } from 'react'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
  console.log(event.target.value);
  setNewName(event.target.value);
};

const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const personObject = {
      name: newName
    };
    setPersons(persons.concat(personObject));
    setNewName('');
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
            onClick={addPerson}>
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