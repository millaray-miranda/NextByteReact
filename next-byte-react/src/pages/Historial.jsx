import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { compras } from "../data/historialData";
import "../assets/css/historial.css";

const Historial = () => {
	const { role } = useAuth();
	const [q, setQ] = useState("");

	const data = useMemo(() => {
		const needle = q.toLowerCase();
		return compras.filter(
			(c) => c.producto.toLowerCase().includes(needle) || c.estado.toLowerCase().includes(needle)
		);
	}, [q]);

	if (role !== "ADMIN") {
		return (
			<section className="page-section" style={{ maxWidth: 800, margin: "20px auto", padding: "0 16px" }}>
				<h2>Acceso restringido</h2>
				<p>Esta vista es para administradores. Puedes ver tu historial desde tu <a href="/perfil">Perfil</a>.</p>
			</section>
		);
	}

	return (
		<div className="historial-container">
			<h1 className="historial-title">Historial de Ventas</h1>
			<div className="busqueda-bar">
				<input type="text" placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
				<button onClick={() => setQ("")}>Limpiar</button>
			</div>
			<div id="compras-list">
				{data.map((c) => (
					<div className="compra-item" key={c.id}>
						<img className="compra-img" src={c.imagen} alt="prod" />
						<div className="compra-info">
							<div className="compra-nombre">{c.producto}</div>
							<div className="compra-fecha">Fecha: {c.fecha}</div>
						</div>
						<span className={`compra-estado estado-${c.estado.toLowerCase()}`}>{c.estado}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Historial;
