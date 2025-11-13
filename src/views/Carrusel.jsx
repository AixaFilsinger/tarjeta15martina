import { Carousel } from "react-bootstrap";
import foto1 from "../assets/fotocarru3.webp"
import foto2 from "../assets/fotocurru1.webp"
import foto3 from "../assets/fotoportada.webp"

const Carrusel = () => {
  return (
    <div className="carrusel-container my-5">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3 shadow"
            src={foto1}
            alt="Foto 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3 shadow"
            src={foto2}
            alt="Foto 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3 shadow"
            src={foto3}
            alt="Foto 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
