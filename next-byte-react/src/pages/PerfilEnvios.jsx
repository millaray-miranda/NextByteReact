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

const PerfilEnvios = () => {
  const { currentUser } = useAuth();
  const [q, setQ] = useState("");

  const onImgError = (ev) => {
    const t = ev.currentTarget;
    t.onerror = null;
    t.src = logo;
  };

  // Encuentra miniatura desde el catálogo por nombre o categoría; fallback al propio envío y luego al logo
  const thumbForEnvio = (nombre) => {
    const n = (nombre || "").toLowerCase();
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

  const bestThumb = (item) => {
    const fromCatalog = thumbForEnvio(item.producto);
    if (fromCatalog && fromCatalog !== logo) return fromCatalog;
    if (item.imagen) return item.imagen;
    return logo;
  };

  const data = useMemo(() => {
    const email = currentUser?.email || "";
    const needle = q.toLowerCase();
    return envios
      .filter((e) => e.userEmail === email)
      .filter(
        (e) =>
          e.producto.toLowerCase().includes(needle) ||
          e.direccion.toLowerCase().includes(needle) ||
          e.estado.toLowerCase().includes(needle)
      );
  }, [q, currentUser]);

  return (
    <div className="envios-container">
      <h1 className="envios-title">Mis envíos</h1>
      <div className="busqueda-bar">
        <input placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
        <button onClick={() => setQ("")}>Limpiar</button>
      </div>

      {data.length === 0 ? (
        <p style={{ marginTop: 12 }}>No encontramos envíos con esos criterios.</p>
      ) : (
        data.map((e) => (
          <div className="envio-item" key={e.id}>
            <img src={bestThumb(e)} alt="prod" className="envio-img" onError={onImgError} />
            <div className="envio-info">
              <div className="envio-nombre">{e.producto}</div>
              <div className="envio-fecha">Fecha: {e.fecha}</div>
              <div className="envio-direccion">Dirección: {e.direccion}</div>
            </div>
            <span className={`envio-estado ${chips[e.estado] || ""}`}>{e.estado}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default PerfilEnvios;
