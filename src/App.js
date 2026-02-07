import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
