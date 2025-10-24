import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/admin.css";
import { productosData } from "../data/productosData";
import { envios } from "../data/enviosData";
import logo from "../assets/img/logo.png";

const Admin = () => {
	const [dark, setDark] = useState(false);


		// Datos para las tarjetas
		const ventas = useMemo(() => productosData.slice(0, 3), []);
		const ultimosEnvios = useMemo(() => envios.slice(0, 3), []);

		// Helpers UI
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

		// Miniatura real para "Envíos" basada en productos del catálogo
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

	return (
		<section className="page-section" style={{ padding: 0 }}>
			<div className={`admin-area ${dark ? "admin-dark" : ""}`}>
				<div className="admin-container">
					<div className="admin-row">
						{/* Columna izquierda (perfil + about) */}
						<div className="admin-col-2">
							<div className="admin-card admin-user-card">
								<div className="admin-grad-bar">
									<img
										className="admin-avatar-xl admin-ring"
										src={logo}
										alt="logo"
									/>
								</div>
								<div className="admin-card-body">
									<h2 className="admin-title-xl">Admin</h2>
									<p className="admin-subtitle"><span role="img" aria-label="pin">📍</span> Sucursal de Vitacura, Chile</p>
									<p className="admin-note">Listo para comprar.</p>
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

						{/* Columna derecha (pendientes + historial) */}
						<div className="admin-col">
											<div className="admin-card">
												<div className="admin-card-title theme right"><span className="admin-badge">{ultimosEnvios.length}</span> Envíos</div>
												<div className="admin-card-body">
													{ultimosEnvios.map((e) => (
														<div className="admin-item-line" key={e.id}>
															<div className="admin-line-start">
																<img className="admin-avatar-s admin-ring" src={thumbForEnvio(e.producto)} alt={e.producto} onError={onImgError} />
																<span>{e.producto}</span>
															</div>
															<div className="admin-line-end">
																<span className={estadoChipClass(e.estado)}>{e.estado}</span>
																<Link to="/envios" className="admin-link">ver</Link>
															</div>
														</div>
													))}
												</div>
											</div>

											<div className="admin-card">
												<div className="admin-card-title theme right"><span className="admin-badge">{ventas.length}+</span> Historial</div>
												<div className="admin-card-body">
													{ventas.map((p) => (
														<div className="admin-item-line" key={p.id}>
															<div className="admin-line-start">
																<img className="admin-avatar-s admin-ring" src={p.imagen} alt={p.nombre} onError={onImgError} />
																<span>{p.nombre}</span>
															</div>
															<div className="admin-line-end">
																<Link to="/historial" className="admin-link">ver</Link>
															</div>
														</div>
													))}
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

export default Admin;
