import './App.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CuentaRegresiva from './views/CuentaRegresiva'
import Frase from './views/Frase'
import Portada from './views/Portada'
import ReproductorMusic from './views/ReproductorMusic'
import Varios from './views/Varios'
import Carrusel from './views/Carrusel'



function App() {
   useEffect(() => {
    AOS.init({
      duration: 700, // duración animación (ms)
      once: true,     // true = solo se ejecuta una vez
    });
  }, []);

  return (
    <section>
     <Portada></Portada>
     <ReproductorMusic></ReproductorMusic>
     <Carrusel></Carrusel>
     <Frase></Frase>
     <CuentaRegresiva></CuentaRegresiva>
     <Varios></Varios>
    </section>
  )
}

export default App
