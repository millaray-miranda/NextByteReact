import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContex'; // Corregido el nombre
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Corregido: Home con H mayúscula
import Productos from './pages/Productos'; // Corregido: Productos con P mayúscula
import Nosotros from './pages/Nosotros'; // Corregido: Nosotros con N mayúscula
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <div className="App">
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/blogs" element={
                <div style={{padding: '50px', textAlign: 'center'}}>
                  <h1>Blogs</h1>
                  <p>Página en construcción</p>
                </div>
              } />
              <Route path="/contacto" element={
                <div style={{padding: '50px', textAlign: 'center'}}>
                  <h1>Contacto</h1>
                  <p>Página en construcción</p>
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;