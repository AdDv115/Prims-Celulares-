import React from "react";
import "./css/catalogo.css";

const productos = {
  Samsung: [
    { nombre: "Galaxy S23", img: "" },
    { nombre: "Galaxy A54", img: "" },
    { nombre: "Galaxy Z Flip", img: "" },
    { nombre: "Galaxy Note 20", img: "" },
  ],
  Motorola: [
    { nombre: "Moto G73", img: "" },
    { nombre: "Edge 40", img: "" },
    { nombre: "Moto G Power", img: "" },
    { nombre: "Moto Razr 40", img: "" },
  ],
  Huawei: [
    { nombre: "P60 Pro", img: "" },
    { nombre: "Mate 50", img: "" },
    { nombre: "Nova 11", img: "" },
    { nombre: "Y9a", img: "" },
  ],
};

export default function Catalogo() {
  return (
    <div className="catalogo">
      <h1 className="titulo-principal">Catálogo</h1>
      {Object.keys(productos).map((marca) => (
        <div key={marca}>
          <h2 className="titulo-marca">{marca}</h2>
          <div className="grid">
            {productos[marca].map((item, index) => (
              <div key={index} className="card">
                <img src={item.img} alt={item.nombre} />
                <h3>{item.nombre}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
