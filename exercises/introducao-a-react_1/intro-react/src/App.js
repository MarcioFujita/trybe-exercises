import React from 'react';
import './App.css';

const tarefas = ["Acordar", "Tomar banho", "Tomar cafe", "Estudar"];

const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

export default App;
