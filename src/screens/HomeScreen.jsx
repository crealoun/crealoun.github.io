import React from 'react'
import logo from "../assets/logo crea-lo.png"
import "../css/HomeScreen.css"
import { ColorModeContext } from '../contexts/ThemeContext'
import { useLocation } from 'react-router-dom'
import home_1 from "../assets/images/Home 1.jpg"
import home_2 from "../assets/images/Home 2.jpg"
import home_3 from "../assets/images/Home 3.jpg"
import home_4 from "../assets/images/Home 4.jpg"
import home_5 from "../assets/images/Home 5.jpg"
import FooterLogos from '../components/FooterLogos'


const HomeScreen = () => {
  const { homeIndexPalette, theme } = React.useContext(ColorModeContext)
  const location = useLocation()

  const backgroundStyle = {
    backgroundImage: `url('${home_2}')`, // Define aquí el fondo predeterminado
  };

  const textStyle = {
    mixBlendMode: theme.palette.background.mixBlendMode,
    "--underline-color": theme.palette.background.default,
    "--underline-text-color": theme.palette.text.primary,
    // Define aquí los estilos de texto predeterminados
    textAlign: "left", // Ejemplo de estilo de texto fijo
    // Agrega otros estilos de texto según sea necesario
  };

  return (
    <>
      <div id="home-background" style={backgroundStyle} />
      <div id="home-logo-container" style={{ padding: "3rem 1rem" }}>
        <img src={logo} alt="logo" id="home-logo" />
        <div className='home-logo-text mt-5' style={{ ...textStyle }}>
          <p className='parrafo underline'>
            Crea-lo es un proyecto del Área de Cultura de Bienestar Universitario UNAL-Sede Bogotá, que fomenta la reflexión y creación de múltiples prácticas desde lo interdisciplinar y lo micropolítico, promoviendo el hacer cultural desde lo sensible, las emociones y las afectividades e invitando a la emergencia de lo recíproco, la corresponsabilidad y la no instrumentalización de la cultura a través de miradas interdisciplinarias.
          </p>
        </div>
        <div className='home-logo-text mt-2' style={{ ...textStyle }}>
          <p className="parrafo underline">
            A continuación encontrarás trazos de memorias de los diferentes momentos del proyecto Crea-lo, desde el 2020 a 2023. Te invitamos a viajar en este universo virtual que se construyó con materiales diversos gestados con los participantes en los laboratorios sensibles.
          </p>
        </div>
      </div>
      <FooterLogos isHome={true} />
    </>
  )
}

export default HomeScreen