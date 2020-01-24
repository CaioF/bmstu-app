import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Дипломная Работа</Link></li>
          <li><Link to="/form-2">Курсовая Работа</Link></li>
          <li><Link to="/form-3">Реферат</Link></li>
          <li><Link to="/" onClick={() => window.location='https://github.com/CaioF/bmstu-app'}>Репозиторий</Link></li>
        </ul>
        <header className="App-header">
          <img src={"logo-big.png"} alt="logo" />
        </header>
        <Route exact path="/" component={Form_1} />
        <Route path="/form-2" component={Form_2} />
        <Route path="/form-3" component={Form_3} />
      </div>
    </Router>
  );
}

function Form_1() {
  return (
    <div>
      <Form1 />
    </div>
  );
}

function Form_2() {
  return (
    <div>
      <Form2 />
    </div>
  );
}

function Form_3() {
  return (
    <div>
      <Form3 />
    </div>
  );
}

export default App;
