import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import MyComponent from './components/MyComponent';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload any necessary assets here
    const preloadImages = () => {
      const images = ['/my.jpg', '/profile.jpg']; // Add any critical images here
      return Promise.all(
        images.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    preloadImages()
      .catch(err => console.log('Error preloading images:', err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-950 flex flex-col">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;