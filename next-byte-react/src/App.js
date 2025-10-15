import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContex';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import ProductoDetalle from './pages/ProductoDetalle';
import EntradaBlog from './pages/EntradaBlog';
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
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<EntradaBlog />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;