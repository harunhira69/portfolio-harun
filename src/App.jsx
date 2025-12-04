import React from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Preloader />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;


