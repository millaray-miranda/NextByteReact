import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { envios } from "../data/enviosData";
import { productosData } from "../data/productosData";
import logo from "../assets/img/logo.png";
import "../assets/css/envios.css";

const chips = {
	Entregado: "estado-entregado",
	"En camino": "estado-en-camino",
	Pendiente: "estado-pendiente",
};

const Envios = () => {
	const { role } = useAuth();
	const [q, setQ] = useState("");
		const onImgError = (ev) => {
			const t = ev.currentTarget;
			t.onerror = null;
			t.src = logo;
		};

		// Encuentra una miniatura real del catálogo según el nombre del envío
		const thumbForEnvio = (nombre) => {
			const n = nombre.toLowerCase();
			// 1) match directo por nombre
			let p = productosData.find((x) => x.nombre.toLowerCase().includes(n));
			if (p) return p.imagen || logo;
			// 2) por categoría inferida
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

		// Mejor thumb: catálogo > imagen del envío > logo
		const bestThumb = (item) => {
			const fromCatalog = thumbForEnvio(item.producto);
			if (fromCatalog && fromCatalog !== logo) return fromCatalog;
			if (item.imagen) return item.imagen;
			return logo;
		};

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
									<img src={bestThumb(e)} alt="prod" className="envio-img" onError={onImgError} />
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
