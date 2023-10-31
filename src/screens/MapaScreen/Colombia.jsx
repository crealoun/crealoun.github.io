import React from "react";
import "../../css/MapaScreen.css";
import { useState } from "react";
import { mapa } from "./mapaData";

const Colombia = () => {

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

  const handleCloseModal = () => {
    setDepartamentoSeleccionado(null);
  };

  const handleClick = (e) => {
    const selectedId = e.target.id;
    console.log(selectedId)
    const departamentoSeleccionadoData = mapa.find(depto => depto.id === selectedId);
    console.log(departamentoSeleccionadoData)
    if (departamentoSeleccionadoData.activo) {
      setDepartamentoSeleccionado(departamentoSeleccionadoData);
      console.log(departamentoSeleccionado)
    }
  };

  return (
    <div className="mapa-container">

        <svg xmlns="http://www.w3.org/2000/svg">
          {mapa.map((departamento) => {
           
           const pathClassName = departamento.activo ? "path-activo" : "path-inactivo";

            return (
              <g key={departamento.id}>
                <path
                  d={departamento.path}
                  title={departamento.nombre}
                  id={departamento.id}
                  onClick={handleClick}
                  className={pathClassName}
                />
                
              </g>
            );
          })}
        </svg>
      
      {departamentoSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal}>Cerrar</button>
            <div
              dangerouslySetInnerHTML={{ __html: departamentoSeleccionado.contenido }}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Colombia;
