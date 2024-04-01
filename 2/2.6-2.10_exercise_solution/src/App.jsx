import { useState, useEffect } from 'react'
import filterPersons from './components/filterPersons';
import doesExist from './components/doesExist';
import addPerson from './components/addPerson';
import axios from 'axios';


const renderPersons = (newSearchWord, persons) => {
  const personsToRender = newSearchWord === '' ? persons : filterPersons(persons, newSearchWord);
  return personsToRender.map((person) => (
    <li key={person.id}>{person.name} {person.number}</li>
  ));
};


const App = () => {
  // Initialize state variables using the useState hook
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchWord, setNewSearchWord] = useState('')

  // fetch data from the server
  useEffect(() => {
    // send HTTP get request to the server, to retrive information
    axios.get('http://localhost:3001/persons')
      // handle promise and the function will be executed when the promise is fulfilled
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handler called onChange is being called in input text field
  const handleInputChangeName = (event) => {
    // Log each change i typing
    console.log(event.target.value)
    // Update newName to the text within the textfield of input. newName can then be used in handle submit 
    setNewName(event.target.value)
  }

    // Handler called onChange is being called in input text field
    const handleInputChangeNumber = (event) => {
      // Log each change i typing
      console.log(event.target.value)
      // Update newName to the text within the textfield of input. newName can then be used in handle submit 
      setNewNumber(event.target.value)
    }

   // Handler called onChange is being called in input text field
   const handleInputChangeSearchWord = (event) => {
    // Log each change i typing
    console.log(event.target.value)
    // Update newName to the text within the textfield of input. newName can then be used in handle submit 
    setNewSearchWord(event.target.value)
  }

  // Event handler when the onSubmit is being clicked. 
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior, which would cause a page reload
    event.preventDefault(); 
    
    if (doesExist(persons, newName)){
      // Name already exists, handle accordingly and show error message
      window.alert(`${newName} is already added to phonebook`);
    // Reset the input field
    setNewName('');
    setNewNumber('');
    return; // Exit the function early
  }
    addPerson(persons, newName, newNumber, setPersons, setNewName, setNewNumber); 
  }

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with</p>
      <input value={newSearchWord} onChange={handleInputChangeSearchWord} />

      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input value={newName} onChange={handleInputChangeName} />
        </label>
        <br />

        <label>
          number:
          <input value={newNumber} onChange={handleInputChangeNumber}/>
        </label>
        <br />

        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      <ul>{renderPersons(newSearchWord, persons)}</ul>
    </div>
  );
};
export default App

