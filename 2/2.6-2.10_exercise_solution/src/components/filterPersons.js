
const filterPersons = (persons, newSearchWord) => {
    return persons.filter((person) => {
      return person.name.toLowerCase().includes(newSearchWord.toLowerCase());
    });
  };

export default filterPersons;