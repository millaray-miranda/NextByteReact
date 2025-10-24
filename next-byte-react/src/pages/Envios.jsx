import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { envios } from "../data/enviosData";
import "../assets/css/envios.css";

const chips = {
	Entregado: "estado-entregado",
	"En camino": "estado-en-camino",
	Pendiente: "estado-pendiente",
};

const Envios = () => {
	const { role } = useAuth();
	const [q, setQ] = useState("");

	const data = useMemo(() => {
		const needle = q.toLowerCase();
		return envios.filter(
			(e) =>
				e.producto.toLowerCase().includes(needle) ||
				e.direccion.toLowerCase().includes(needle) ||
				e.estado.toLowerCase().includes(needle)
		);
	}, [q]);

	if (role !== "ADMIN") {
		return (
			<section className="page-section" style={{ maxWidth: 800, margin: "20px auto", padding: "0 16px" }}>
				<h2>Acceso restringido</h2>
				<p>Esta vista es para administradores. Puedes ver tus envíos desde tu <a href="/perfil">Perfil</a>.</p>
			</section>
		);
	}

	return (
		<div className="envios-container">
			<h1 className="envios-title">Envíos</h1>
			<div className="busqueda-bar">
				<input placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
				<button onClick={() => setQ("")}>Limpiar</button>
			</div>
			{data.map((e) => (
				<div className="envio-item" key={e.id}>
					<img src={e.imagen} alt="prod" className="envio-img" />
					<div className="envio-info">
						<div className="envio-nombre">{e.producto}</div>
						<div className="envio-fecha">Fecha: {e.fecha}</div>
						<div className="envio-direccion">Dirección: {e.direccion}</div>
					</div>
					<span className={`envio-estado ${chips[e.estado] || ""}`}>{e.estado}</span>
				</div>
			))}
		</div>
	);
};

export default Envios;
