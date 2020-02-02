import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1 className="App-title"> Welcome </h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
        <div>
        <Route exact path ="/" component={Fib}/>
        <Route path="/otherpage" component ={OtherPage} />
         </Router>
    </div>
   
  );
}

export default App;
~
