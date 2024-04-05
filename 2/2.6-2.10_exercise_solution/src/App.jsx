import { useState, useEffect } from 'react'
import filterPersons from './components/filterPersons';
import doesExist from './components/doesExist';
import addPerson from './components/addPerson';
import phonebook from './services/phonebook'


const renderPersons = (newSearchWord, persons, deletePerson) => {
  const personsToRender = newSearchWord === '' ? persons : filterPersons(persons, newSearchWord);
  return personsToRender.map((person) => (
    <li key={person.id}>{person.name} {person.number}
    <button onClick={() => deletePerson(person.id)}> delete</button>
    </li>
  ));
};



const App = () => {
  // Initialize state variables using the useState hook
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchWord, setNewSearchWord] = useState('')

  const deletePerson = (id) => {
  console.log("Deleting person with id:", id);
  
  if (window.confirm("Do you really want to delete?")) {
    // Send a DELETE request to the server to delete the person with the specified id
    phonebook.remove(id)
      .then(response => {
        console.log("Delete response:", response);
        // After the person is deleted, fetch the updated list of persons
        phonebook.getAll()
          .then(response => {
            console.log("Fetched persons after delete:", response.data);
            setPersons(response.data);
          });
      })
      .catch(error => {
        console.error('Error deleting person:', error);
      });
  }
};

// fetch data from the server
useEffect(() => {
  // send HTTP get request to the server, to retrieve information
  phonebook.getAll()
    // handle promise and the function will be executed when the promise is fulfilled
    .then(response => {
      console.log("Fetched persons:", response.data);
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

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    if (doesExist(persons, newName)){
      window.alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
      return;
    }
  
    const newPerson = addPerson(persons, newName, newNumber, setPersons, setNewName, setNewNumber); 
  
    phonebook.create(newPerson)
    .then(response => {
      // Add the new person directly to the local state
      setPersons([...persons, response.data]);
    })
    .catch(error => {
      console.error('Error adding person:', error);
    });
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
      <ul>{renderPersons(newSearchWord, persons, deletePerson
        )}</ul>
    </div>
  );
};
export default App

