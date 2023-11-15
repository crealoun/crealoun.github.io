import React from "react";
import "../../css/MapaScreen.css";
import { useState } from "react";
import { mapa } from "./mapaData";
import AudioPlayer from "../../components/AudioPlayer";
import VideoPlayer from "../../components/VideoPlayer";
import ImageGallery from "../../components/ImageGallery";
import PDFViewer from "../../components/PDFViewerx"

const Colombia = () => {

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);
  const [departamentoSobre, setDepartamentoSobre] = useState(null);

  const handleCloseModal = () => {
    setDepartamentoSeleccionado(null);
  };

  const handleMouseEnter = (e) => {
    const selectedId = e.target.id;
    // Calcula la posición deseada del tooltip (ajústala según tus necesidades)
    const top = e.clientY + 10; 
    const left = e.clientX + 10; 
    const departamentoSobreData = mapa.find((depto) => depto.id === selectedId);
    if (departamentoSobreData.activo) {
      setDepartamentoSobre({
        ...departamentoSobreData,
        positionY: `${top}px`,
        positionX: `${left}px`,
      });
    }
  };

  const handleMouseLeave = () => {
    setDepartamentoSobre(null);
  };

  const handleClick = (e) => {
    const selectedId = e.target.id;
    console.log(selectedId)
    const departamentoSeleccionadoData = mapa.find(depto => depto.id === selectedId);
    console.log(departamentoSeleccionadoData)
    if (departamentoSeleccionadoData.activo) {
      setDepartamentoSeleccionado(departamentoSeleccionadoData);
      setDepartamentoSobre(null);
      console.log(departamentoSeleccionado)
    }
  };

  return (
    <div className="mapa-container">
      <svg xmlns="http://www.w3.org/2000/svg">
        {mapa.map((departamento) => {
          const pathClassName = departamento.activo
            ? "path-activo"
            : "path-inactivo";

          return (
            <g key={departamento.id}>
              <path
                d={departamento.path}
                title={departamento.nombre}
                id={departamento.id}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={pathClassName}
              />
            </g>
          );
        })}
      </svg>

      {departamentoSobre && (
        <div
          className="tooltip"
          style={{
            top: departamentoSobre.positionY,
            left: departamentoSobre.positionX,
          }}
        >
          <h4>Título: {departamentoSobre.contenido.titulo}</h4>
          <h4>Autor: {departamentoSobre.contenido.autor}</h4>
          <p>Click para visualizar los deseos</p>
        </div>
      )}

      {departamentoSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal}>Cerrar</button>
            {departamentoSeleccionado.tipo.map((tipo, index) => {
              const isMultiple = tipo.length > 1;

              return (
                <div key={index}>
                  {isMultiple ? <h3>Contenido {index + 1}</h3> : null}
                  {tipo.map((entry, entryIndex) => (
                    
                    <div key={entryIndex}>
                      <h4>
                        Título:{" "}
                        {departamentoSeleccionado.contenido.titulo[index]}
                      </h4>
                      <h4>
                        Autor: {departamentoSeleccionado.contenido.autor[index]}
                      </h4>
                      {tipo[entryIndex] === "pdf" ? (
                        <PDFViewer
                          src={
                            departamentoSeleccionado.contenido.rutas[index][
                              entryIndex
                            ][0]
                          }
                        />
                      ) : tipo[entryIndex] === "audio" ? (
                        <AudioPlayer
                          src={
                            departamentoSeleccionado.contenido.rutas[index][
                              entryIndex
                            ]
                          }
                        />
                      ) : tipo[entryIndex] === "imagen" ? (
                        <ImageGallery
                          images={
                            departamentoSeleccionado.contenido.rutas[index][
                              entryIndex
                            ]
                          }
                        />
                      ) : tipo[entryIndex] === "video" ? (
                        <VideoPlayer
                          src={
                            departamentoSeleccionado.contenido.rutas[index][
                              entryIndex
                            ]
                          }
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Colombia;
