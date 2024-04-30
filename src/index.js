import React from 'react'; //importa o react , está local na pasta node
import ReactDOM from 'react-dom/client'; //permite usar o virtualDOM, está local na pasta node
import './index.css'; //importa o arquivo index.css
//import App from './App'; //componente App.js - que está sendo importado
import Relogio from './Relogio';
import Letreiro from './Letreiro'; //quando a prof pedir na atividade para importar o componente Relogio.
import reportWebVitals from './reportWebVitals'; //biblioteca do google que ajuda criar estatistica para sua aplicação - pode ser tirada quando quiser.

const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot - renderiza o que está dentro do elemento que pode ser um fragment ou uma div
root.render(
  <React.StrictMode>
    <Relogio />
    <Letreiro />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
