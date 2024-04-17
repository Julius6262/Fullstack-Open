const doesExist = (persons,newName) => {
    for ( let i= 0; i < persons.length; i++){
      if (JSON.stringify(persons[i].name) === (JSON.stringify(newName))){
        return true;
      }
    }
    return false;
  }

  export default doesExist;