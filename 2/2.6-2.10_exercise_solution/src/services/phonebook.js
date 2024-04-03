import axios from 'axios';

// Define the base URL for my API
const baseUrl = 'http://localhost:3001/persons';

// Function to get all phonebook entries from the server
const getAll = () => {
  return axios.get(baseUrl);
};
// Function to create a new phonebook entry on the server
const create = newEntry => {
  return axios.post(baseUrl, newEntry);
};


export default { getAll, create};
