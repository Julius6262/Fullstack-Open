import { useState } from 'react'

const App = () => {
  // Initialize state variables using the useState hook
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchWord, setNewSearchWord] = useState('')

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
    
    if (doesExist()){
      // Name already exists, handle accordingly and show error message
      window.alert(`${newName} is already added to phonebook`);
    // Reset the input field
    setNewName('');
    setNewNumber('');
    return; // Exit the function early
  }
    // create number for id, 1 is hardcodede so we start at 2, the id increases as the length of the array increases
    let i = persons.length +1
    // If the name doesn't exist, proceed to add it
    // Create a new person, on the same format as the persons in the hook, by adding name and number
    const newPerson = {name: newName, number: newNumber, id: i}
    // Sets person to the new array, with the new person at the end
    setPersons(persons.concat(newPerson));  // Sets person to the new array, with the new person at the end
    // clear the input field
    setNewName('');
    setNewNumber('');
    
    console.log(persons)  
  }

  const doesExist = () => {
    for ( let i= 0; i < persons.length; i++){
      if (JSON.stringify(persons[i].name) === (JSON.stringify(newName))){
        return true;
      }
    }
    return false;
  }


  const filteredPerson = persons.filter((person) => {
    return person.name.toLowerCase().includes(newSearchWord.toLowerCase());
  });
  
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={newSearchWord} onChange={handleInputChangeSearchWord} />
      <h2>Add a new</h2>
      {/* collet user input i form */}
      <form onSubmit={handleSubmit}>
      {/*input field, the typed value is being saved in newName.  */}
      name: <input value={newName} onChange={handleInputChangeName} />
      <br></br>
      
      number: <input value={newNumber} onChange={handleInputChangeNumber}/>
      {/* create a button of typesubmit, wich goes with OnSubmit */}
      <br></br>
      <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>

      <ul>
  {/* Check if there's a search filter and if the filter is applied */}
  {newSearchWord === '' ? (
    // If no filter is applied, display all persons
    persons.map(person => (
      <li key={person.id}>{person.name} {person.number}</li>
    ))
  ) : (
    // If a filter is applied, display filtered persons only
    filteredPerson.map(person => (
      <li key={person.id}>{person.name} {person.number}</li>
    ))
  )}
</ul>
      </div>
  );
};
export default App

