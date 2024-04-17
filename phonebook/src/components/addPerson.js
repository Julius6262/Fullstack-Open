import { useState } from 'react'
const addPerson = (persons, newName, newNumber, setPersons, setNewName, setNewNumber) => {
    // Generate a unique id for the new person
    const id = JSON.stringify(Date.now());
  
    // Create a new person
    const newPerson = {name: newName, number: newNumber, id: id};
  
    // Add the new person to the persons array
    setPersons(persons.concat(newPerson));
  
    // Clear the input fields
    setNewName('');
    setNewNumber('');
  
    // Return the newly created person object
    return newPerson;
  };

  export default addPerson;