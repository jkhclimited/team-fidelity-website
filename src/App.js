import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Competitive from './pages/Competitive/Competitive';
import Contact from './pages/Contact/Contact';

class App extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/competitive" element={<Competitive />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Home />}/>
          </Routes>
        </div>
      </main>
    )
  }
}

export default App;
