import React, { useState } from 'react';

const Foto = ({ foto }) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div
      className="foto"
      style={{ top: foto.top, left: foto.left }}
      onMouseEnter={() => setMostrarDescripcion(true)}
      onMouseLeave={() => setMostrarDescripcion(false)}
    >
      <img src={foto.src} alt={`Foto ${foto.id}`} />
      {mostrarDescripcion && <div className="descripcion">{foto.descripcion}</div>}
    </div>
  );
};

export default Foto;