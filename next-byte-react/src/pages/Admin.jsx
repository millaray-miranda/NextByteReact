import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/admin.css";

const buyers = ["mykeRoss", "tonyStark", "clarkKent", "peterParker", "bruceWayne", "natashaR", "dianaP"];

const Admin = () => {
	const [dark, setDark] = useState(true);

	const peopleToRate = useMemo(
		() => [
			{ name: "Diego A.", avatar: "https://via.placeholder.com/44" },
			{ name: "Juan R.", avatar: "https://via.placeholder.com/44" },
		],
		[]
	);

	return (
		<section className="page-section" style={{ padding: 0 }}>
			<div className={dark ? "container dark-mode" : "container"}>
				<div className="row">
					{/* Columna izquierda (perfil + about) */}
					<div className="col-2">
						<div className="user-card">
							<div className="card-header">
								<img className="avatar-m" src="https://via.placeholder.com/90" alt="avatar" />
							</div>
							<div className="card-body">
								<h1>Administrador</h1>
								<p className="start" style={{ gap: 8 }}>
									<span role="img" aria-label="pin">📍</span>
									<strong>Sucursal de Vitacura, Chile</strong>
								</p>
								<p style={{ marginTop: 8 }}>Soy el encargado de reponer, gestionar y actualizar el inventario.</p>
							</div>
						</div>

						<div className="card">
							<div className="header">Más sobre nosotros.</div>
							<div className="card-body">
								<ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
									<li>Marca número uno en el mercado</li>
									<li>Precios accesibles para la comunidad</li>
									<li>Envío rápido en todo Chile</li>
								</ul>
								<div className="dates">Mar 2025 - Actualidad.</div>
							</div>
						</div>
					</div>

					{/* Columna derecha (calificación + historial) */}
					<div className="col">
						<div className="card">
							<div className="header"><span className="connections">2</span> Calificación a comprador</div>
							<div className="card-body">
								{peopleToRate.map((p) => (
									<div className="user-line" key={p.name}>
										<div className="start">
											<img className="avatar-s" src={p.avatar} alt="avatar" />
											<span>{p.name}</span>
										</div>
										<div className="end">
											<span className="connections">aceptar</span>
											<span className="connections">declinar</span>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="card">
							<div className="header"><span className="connections">500+</span> Historial de ventas</div>
							<div className="card-body">
								{buyers.map((b) => (
									<div className="user-line" key={b}>
										<div className="start">
											<img className="avatar-s" src="https://via.placeholder.com/44" alt="avatar" />
											<span>{b}</span>
										</div>
										<div className="end">
											<Link to="/historial">ver</Link>
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
				className="darkmode-btn"
				onClick={() => setDark((v) => !v)}
				style={{ position: "fixed", right: 16, bottom: 16 }}
			>
				{dark ? "Modo claro" : "Modo oscuro"}
			</button>
		</section>
	);
};

export default Admin;
