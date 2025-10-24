import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/css/admin.css";
import { envios } from "../data/enviosData";
import { compras } from "../data/historialData";
import { productosData } from "../data/productosData";
import logo from "../assets/img/logo.png";

const Perfil = () => {
	const { currentUser } = useAuth();
	const [dark, setDark] = useState(false);
	const email = currentUser?.email || "";

	// Datos filtrados por usuario (usar email vacío si no hay sesión para mantener orden de hooks)
	const misEnvios = useMemo(
		() => envios.filter((e) => e.userEmail === email).slice(0, 3),
		[email]
	);
	const miHistorial = useMemo(
		() => compras.filter((c) => c.userEmail === email).slice(0, 3),
		[email]
	);

	if (!currentUser) return null;

	// Helpers UI (reutilizados de Admin)
	const estadoChipClass = (estado) => {
		switch (estado) {
			case "Entregado":
				return "admin-chip chip-success";
			case "En camino":
				return "admin-chip chip-info";
			case "Pendiente":
				return "admin-chip chip-warning";
			default:
				return "admin-chip";
		}
	};

	const onImgError = (ev) => {
		const t = ev.currentTarget;
		t.onerror = null;
		t.src = logo;
	};

	const thumbForEnvio = (nombre) => {
		const n = nombre.toLowerCase();
		let p = productosData.find((x) => x.nombre.toLowerCase().includes(n));
		if (p) return p.imagen || logo;
		let categoria = null;
		if (n.includes("tecla")) categoria = "teclados";
		else if (n.includes("mouse")) categoria = "mouses";
		else if (n.includes("monitor")) categoria = "monitores";
		else if (n.includes("silla")) categoria = "sillas";
		if (categoria) {
			p = productosData.find((x) => x.categoria === categoria);
			if (p) return p.imagen || logo;
		}
		return logo;
	};

	// Miniatura para compras del historial (similar a Historial.jsx)
	const thumbForCompra = (nombre) => {
		const n = nombre.toLowerCase();
		let p = productosData.find((x) => x.nombre.toLowerCase().includes(n));
		if (p) return p.imagen || logo;
		let categoria = null;
		if (n.includes("tecla")) categoria = "teclados";
		else if (n.includes("mouse")) categoria = "mouses";
		else if (n.includes("monitor")) categoria = "monitores";
		else if (n.includes("silla")) categoria = "sillas";
		if (categoria) {
			p = productosData.find((x) => x.categoria === categoria);
			if (p) return p.imagen || logo;
		}
		return logo;
	};

	const bestThumbCompra = (c) => {
		const fromCatalog = thumbForCompra(c.producto);
		if (fromCatalog && fromCatalog !== logo) return fromCatalog;
		if (c.imagen) return c.imagen;
		return logo;
	};

	return (
		<section className="page-section" style={{ padding: 0 }}>
			<div className={`admin-area ${dark ? "admin-dark" : ""}`}>
				<div className="admin-container">
					<div className="admin-row">
						{/* Columna izquierda (perfil + cuenta) */}
						<div className="admin-col-2">
							<div className="admin-card admin-user-card">
								<div className="admin-grad-bar">
									<img className="admin-avatar-xl admin-ring" src={logo} alt="avatar" />
								</div>
								<div className="admin-card-body">
									<h2 className="admin-title-xl">Mi perfil</h2>
									<p className="admin-subtitle"><strong>Nombre:</strong> {currentUser.name}</p>
									<p className="admin-subtitle"><strong>Correo:</strong> {currentUser.email}</p>
								</div>
							</div>

							<div className="admin-card">
								<div className="admin-card-title theme">Más sobre nosotros.</div>
								<div className="admin-card-body">
									<ul className="admin-list">
										<li>Marca número uno en el mercado</li>
										<li>Precios accesibles para la comunidad</li>
										<li>Envío rápido en todo Chile</li>
									</ul>
									<div className="admin-meta">Mar 2025 - Actualidad.</div>
								</div>
							</div>
						</div>

						{/* Columna derecha (envíos + historial) */}
						<div className="admin-col">
							<div className="admin-card">
								<div className="admin-card-title theme right"><span className="admin-badge">{misEnvios.length}</span> Mis envíos</div>
								<div className="admin-card-body">
									{misEnvios.map((e) => (
										<div className="admin-item-line" key={e.id}>
											<div className="admin-line-start">
												<img className="admin-avatar-s admin-ring" src={thumbForEnvio(e.producto)} alt={e.producto} onError={onImgError} />
												<span>{e.producto}</span>
											</div>
											<div className="admin-line-end">
												<span className={estadoChipClass(e.estado)}>{e.estado}</span>
												<Link to="/perfil/envios" className="admin-link">ver</Link>
											</div>
										</div>
									))}
									{misEnvios.length === 0 && <div className="admin-note">Aún no tienes envíos.</div>}
								</div>
							</div>

							<div className="admin-card">
								<div className="admin-card-title theme right"><span className="admin-badge">{miHistorial.length}+</span> Mi historial</div>
								<div className="admin-card-body">
									{miHistorial.map((c) => (
										<div className="admin-item-line" key={c.id}>
											<div className="admin-line-start">
												<img className="admin-avatar-s admin-ring" src={bestThumbCompra(c)} alt={c.producto} onError={onImgError} />
												<span>{c.producto}</span>
											</div>
											<div className="admin-line-end">
												<Link to="/perfil/historial" className="admin-link">ver</Link>
											</div>
										</div>
									))}
									{miHistorial.length === 0 && <div className="admin-note">Aún no tienes compras.</div>}
								</div>
							</div>
						</div>
					</div>
				</div>

				<button
					type="button"
					className="admin-darkmode-btn"
					onClick={() => setDark((v) => !v)}
					aria-label="Alternar modo oscuro"
				>
					{dark ? "Modo claro" : "Modo oscuro"}
				</button>
			</div>
		</section>
	);
};

export default Perfil;
