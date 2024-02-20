import React, { useMemo, useState } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../hooks";
import Modal from "react-modal";

import FooterLogos from "../../components/FooterLogos";
import "../../css/BlogScreen.css";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100vw",
  height: "100%",
  display: "grid",
  justifyContent: "center",
  fontFamily: "Inter",
  color: "#A3C9D9",
  lineHeight: "21px",
  backgroundColor: "#173040",
}));

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    maxWidth: "600px",
    margin: "auto",
  },
};

// Datos de ejemplo (reemplázalos con tus propios datos)
const entries = [
  {
    id: 1,
    image: "https://crealoun.files.wordpress.com/2023/06/pruebita-1.png?w=500",
    description: "DONDE NADA ME MOLESTA",
    fullContent: "Contenido de donde nada me molesta...",
  },
  {
    id: 2,
    image: "https://crealoun.files.wordpress.com/2023/06/pruebita-1.png?w=500",
    description: "YO ELIJO NO SER CUERDA",
    fullContent: "Resulta difícil encontrar espacios que se sientan propios, lugares donde refugiarse cuando todo se desmorona. Pero la nacho es uno de ellos, solo llegar al campus se siente como una recarga al alma. Lugares donde (a veces) se desdibuja la realidad, en un momento estás quejándote de la fría mañana y al otro te encuentras con el calor del tropel, en tus tímpanos resonando las arengas al compás de las aturdidoras mientras que tus ojos lloran por las lacrimógenas que te alivian la gripa de la semana pasada. O te cruzas con una parranda vallenata que intenta recitar a voz rasgada canciones que te recuerdan a tu tierra. O te encuentras inmerso en un círculo de cumbia donde los rolos hacen su intento de seguir el ritmo de esa melodía que resulta tan conocida. O simplemente llegas a una asamblea con una acalorada discusión sobre si la movilización debería ir al sur o al norte de la ciudad, por eso de si se debe parar a las empresas o ir a donde está el pueblo.\n  Hay diferentes personajes, como los representantes que recitan informes de reuniones por medio de en vivos de instagram vanagloriándose por ser (supuestamente) lo mejor que ha tenido la universidad mientras reniegan la acción violenta como una forma de lucha, también están quienes dicen que la universidad es solo para estudiar y por eso los mamertos no se gradúan. Pero dentro de todo, hay un ambiente político en su inmensidad, donde debes decidir si quieres convencer a tus compañerxs de la importancia de la organización estudiantil o si prefieres conservar la cordura.  Yo elijo no ser cuerda. \n   Por: Carla Ordoñez Osorno",
  },
  // Agrega más entradas según sea necesario
];

const BlogScreen = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const openModal = (entry) => {
    setSelectedEntry(entry);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedEntry(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Container style={{ padding: "4rem 4rem 2rem 4rem" }}>
        <div id="blogScreen" />
        <div className="blog-screen ml-15" style={{ maxWidth: "1200px" }}>
          <header className="mt-3">
            <h2 className="m-0">Blog</h2>
            <h3 className="m-0">Proyecto:</h3>
          </header>

          <div>
            <div className="image-grid">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="image-card"
                  onClick={() => openModal(entry)}
                >
                  <img src={entry.image} alt={entry.description} />
                  <p>{entry.description}</p>
                </div>
              ))}
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyle}
            >
              {selectedEntry && (
                <div>
                  <img
                    src={selectedEntry.image}
                    alt={selectedEntry.description}
                  />
                  <p>{selectedEntry.fullContent}</p>
                  <button onClick={closeModal}>Cerrar</button>
                </div>
              )}
            </Modal>
          </div>



        </div>
      </Container>
      <Container style={{ padding: "2rem 4rem" }}>
        <div className="creditos-screen" style={{ maxWidth: "1200px" }}>
          <div className="grid-2 gap-2">
            <div>
              <div className="parrafo">
                <p>
                  Todos los contenidos de esta publicación fueron desarrollados
                  en el marco del proyecto «Crea-lo: otros mundos posibles en la
                  UN. Laboratorios, talleres y experiencias para el activismo
                  cultural universitario» a través de talleres y laboratorios
                  colaborativos y representan una voz común de los
                  participantes.
                </p>
              </div>
            </div>
            <div>
              <div className="parrafo">
                <p>Universidad Nacional de Colombia</p>
                <p>DIVISIÓN DE CULTURA</p>
                <p>Dirección de Bienestar Universitario</p>
                <p>Sede Bogotá</p>
              </div>
              <div className="parrafo">
                <p>Edificio 103 - Centro Polideportivo</p>
                <p>Primer Piso</p>
                <p>Ciudad Universitaria</p>
                <p>Bogotá D.C., Colombia</p>
              </div>
              <div className="parrafo">
                <p>Email: culturabien_bog@unal.edu.co</p>
                <p>Facebook: </p>
                <p>Área Cultura Unal Bog</p>
              </div>
            </div>
          </div>
        </div>
        <FooterLogos />
      </Container>
    </>
  );
};

export default BlogScreen;
