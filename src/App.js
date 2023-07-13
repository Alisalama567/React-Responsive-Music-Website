import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Header/Hero/Hero';
import Experience from './Components/Header/Experience/Experience';
import Search from './Components/Header/Search/Search';
import Download from './Components/Header/Download/Download';
import Footer from './Components/Header/Footer/Footer';
function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Experience />
    <Search />
    <Download />
    <Footer />
    </div>
  );
}

export default App;
