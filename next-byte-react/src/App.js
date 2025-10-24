import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import ProductoDetalle from './pages/ProductoDetalle';
import EntradaBlog from './pages/EntradaBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import PerfilEnvios from './pages/PerfilEnvios';
import PerfilHistorial from './pages/PerfilHistorial';
import Envios from './pages/Envios';
import Historial from './pages/Historial';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import VistaPreviaCarrito from './components/VistaPreviaCarrito'; // <-- El import está BIEN

function App() {
	return (
		<AuthProvider>
			<CarritoProvider>
				<Router>
					<div className="App">
						<Navbar />

						{/* Vista previa del carrito */}
						<VistaPreviaCarrito />

						<main className="main-content">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/productos" element={<Productos />} />
								<Route path="/producto/:id" element={<ProductoDetalle />} />
								<Route path="/nosotros" element={<Nosotros />} />
								<Route path="/blogs" element={<Blogs />} />
								<Route path="/blog/:slug" element={<EntradaBlog />} />
								<Route path="/contacto" element={<Contacto />} />

								{/* Auth */}
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Register />} />

								{/* Rutas protegidas */}
								<Route path="/perfil" element={<PrivateRoute element={<Perfil />} />} />
								<Route path="/perfil/envios" element={<PrivateRoute element={<PerfilEnvios />} />} />
								<Route path="/perfil/historial" element={<PrivateRoute element={<PerfilHistorial />} />} />
								<Route path="/admin" element={<PrivateRoute requiredRole="ADMIN" element={<Admin />} />} />
								<Route path="/envios" element={<PrivateRoute requiredRole="ADMIN" element={<Envios />} />} />
								<Route path="/historial" element={<PrivateRoute requiredRole="ADMIN" element={<Historial />} />} />
							</Routes>
						</main>

						<Footer />
					</div>
				</Router>
			</CarritoProvider>
		</AuthProvider>
	);
}

export default App;