// HandleSubmitForm.js
import React from 'react';
import { useState} from 'react';
import phonebook from '../services/phonebook';
import Notification from './Notification'; 




const HandleSubmitForm = ({ persons, 
                            newName, 
                            newNumber, 
                            setPersons, 
                            setNewName, 
                            setNewNumber, 
                            addPerson, 
                            handleInputChangeName, 
                            handleInputChangeNumber,
                            setErrorMessage
  }) => {
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        phonebook.update(existingPerson.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data));
            setNewName('');
            setNewNumber('');
            setErrorMessage(
              `Changed number for '${newName}' to '${newNumber}'`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000) 
            });
      }
    } else {
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
  };

  return (
    <div>
    <Notification message={errorMessage}/>
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
    </div>
  );
};

export default HandleSubmitForm;
