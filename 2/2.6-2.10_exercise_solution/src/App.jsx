import { useState } from 'react'

const App = () => {
  // Initialize state variables using the useState hook
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Handler called onChange is being called in input text field
  const handleInputChange = (event) => {
    // Log each change i typing
    console.log(event.target.value)
    // Update newName to the text within the textfield of input. newName can then be used in handle submit 
    setNewName(event.target.value)
  }

  // Event handler when the onSubmit is being clicked. 
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior, which would cause a page reload
    event.preventDefault(); 
    // Create a new person, on the same format as the persons in the hook, by adding it to the end
    const newPerson = {name: newName}
    // Sets person to the new array, with the new person at the end
    setPersons(persons.concat(newPerson));  // Sets person to the new array, with the new person at the end
    // clear the input field
    setNewName('');
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <br></br>
      <h2>Names :</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )  
}

export default App

