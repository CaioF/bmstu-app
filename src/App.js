import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';
import Iframe from 'react-iframe';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li className="li1"><Link to="/">Начальная страница</Link></li>
          <li className="li1"><Link to="/author">Об авторе</Link></li>
          <li className="li1"><Link onClick={() => window.location='https://github.com/CaioF/bmstu-app'}>Репозиторий</Link></li>
        </ul>
        <header className="App-header">
          <br />
          <img className="Header-img" src={"logo-big.png"} alt="logo" />
          <br />
        </header>
    
        <Switch>
          <Route path="/author">
            <Author />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Author() {
  return (
    <div className="App-page">
      <div className="container-contact100">
        <Iframe className="App-iframe" url="https://caiof.github.io/"/>
      </div>
    </div>
  );
}

function Home() {
  let match = useRouteMatch();

  return (
    <div className="App-page">

      <ul>
        <li className="li2"><Link to="/diplomnaya">Дипломная Работа</Link></li>
        <li className="li2"><Link to="/kursovaya">Курсовая Работа</Link></li>
        <li className="li2"><Link to="/referat">Реферат</Link></li>
      </ul>

      <Switch>
        <Route path="/kursovaya">
          <Kursovaya />
        </Route>
        <Route path="/diplomnaya">
          <Diplomnaya />
        </Route>
        <Route path="/referat">
          <Referat />
        </Route>
        <Route path={match.path}>
          <div className="Landing-page">
            <br />
            <h2>Добро пожаловать к Титульник МГТУ им. Баумана!</h2>
            <h4>Веб-приложение для автоматического создания титульных листов</h4>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

function Diplomnaya() {
  return (
    <div className="App-page">
      <Form1 />
    </div>
  );
}

function Kursovaya() {
  return (
    <div className="App-page">
      <Form2 />
    </div>
  );
}

function Referat() {
  return (
    <div className="App-page">
      <Form3 />
    </div>
  );
}

export default App;
