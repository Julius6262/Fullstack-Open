import { useState } from 'react'
const addPerson = (persons, newName, newNumber, setPersons, setNewName, setNewNumber) => {
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
  }
export default addPerson;