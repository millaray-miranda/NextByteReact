import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { compras } from "../data/historialData";
import { productosData } from "../data/productosData";
import logo from "../assets/img/logo.png";
import "../assets/css/historial.css";

const Historial = () => {
	const { role } = useAuth();
	const [q, setQ] = useState("");

	// Fallback robusto de imágenes, similar a Envíos
	const onImgError = (ev) => {
		const t = ev.currentTarget;
		t.onerror = null;
		t.src = logo;
	};

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

	const bestThumb = (c) => {
		const fromCatalog = thumbForCompra(c.producto);
		if (fromCatalog && fromCatalog !== logo) return fromCatalog;
		if (c.imagen) return c.imagen;
		return logo;
	};

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
						<img className="compra-img" src={bestThumb(c)} alt="prod" onError={onImgError} />
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
