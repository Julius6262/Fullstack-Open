import { useState } from 'react'

const App = () => {
  // Initialize state variables using the useState hook
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
     number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const [newNumber, setNewNumber] = useState('')

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
    // If the name doesn't exist, proceed to add it
    // Create a new person, on the same format as the persons in the hook, by adding name and number
    const newPerson = {name: newName, number: newNumber}
    // Sets person to the new array, with the new person at the end
    setPersons(persons.concat(newPerson));  // Sets person to the new array, with the new person at the end
    // clear the input field
    setNewName('');
    setNewNumber('');  
  }

  const doesExist = () => {
    for ( let i= 0; i < persons.length; i++){
      if (JSON.stringify(persons[i].name) === (JSON.stringify(newName))){
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
      </div>
  );
};
export default App

