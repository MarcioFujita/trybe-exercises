const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!

};

window.onload = () => fetchJoke();

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

fetch(API_URL, myObject)
  .then(response => console.log(response));
