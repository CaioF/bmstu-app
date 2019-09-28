import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './components/form';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/info">INFO</Link></li>
          <li><Link onClick={ () => window.location='https://cloud.mongodb.com/v2/5d8efdc4c56c9839eee19e39#clusters/detail/Cluster0-kickidlerapp'}>ADMIN</Link></li>
        </ul>
        <header className="App-header">
          <img src={"logo-big.png"} alt="logo" />
        </header>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Info() {
  return (
    <div>
      <h2>Info</h2>
    </div>
  );
}

export default App;
