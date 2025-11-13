import adorno from "../assets/Adornonegro.png";
import boladisco from "../assets/boladiscoN.png";
import dressCode from "../assets/dresscodeN.png";
import Notamusical from "../assets/notamusica.png";
import copas from "../assets/copasN.png";
import asistencia from "../assets/invitacionN.png";
import regalo from "../assets/regaloN.png";
import brillo from "../assets/star.png";

import { useState } from "react";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="m-0 p-0">
      <article className="varios0 pt-4 pb-4">
      <section className="container d-flex flex-column align-items-center varios">
      <img src={adorno} alt="" width={300} className="mt-5" />
      <article className="row">
        <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
            <img src={brillo} alt="" className="brillo brillo-top"/>
          <img src={copas} alt="" width={190} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Fiesta
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            6 de diciembre <br />
            21:30 hs
          </p>
        </aside>
        <aside className="col-xs-12 text-center donde mb-4 position-relative">
          <img src={boladisco} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¿Dónde?
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El Ceibo Salón<br/>Lules
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open("https://maps.app.goo.gl/EfE6FWm4xhtEBnTs7")
            }
          >
            CÓMO LLEGAR
          </button>
          <img src={brillo} alt="" className="brillo brillo-bottom" />
        </aside>
        <aside className="col-xs-12 text-center dressCode mb-4">
          <img src={dressCode} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            DressCode
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Elegante sport<br /> Evitar el color celeste y plateado
          </p>
        </aside>
        <aside className="col-xs-12 text-center playlist mb-4">
          <img src={Notamusical} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            PLAYLIST
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¡Creemos la playlist de la noche juntos!
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open(
                "https://open.spotify.com/playlist/2wsV7QkiEKw8s2lRdY97vA?si=WkXI4vrbRr-KIjLxGhWeGg"
              )
            }
          >
            Sugerir canción
          </button>
        </aside>
        <aside className="col-xs-12 text-center asistencia mb-4">
          <img src={asistencia} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Soñé con este día y me gustaría vivirlo con quienes más quiero...
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => window.open("https://wa.link/m64j5m")}
          >
            Confirmar Asistencia
          </button>
        </aside>
        <aside className="col-xs-12 text-center regalo mb-5">
          <img src={regalo} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El mejor regalo que pueda tener será tu presencia
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => setShowModal(true)}
          >
            Enviar regalo
          </button>
          {/* Modal */}
          {showModal && (
            <div
              className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
              style={{
                zIndex: 9999, // 🔑 siempre arriba de todo
                width: "90%",
                maxWidth: "350px",
              }}
            >
              <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

              {/* Los <p> ahora sí se ven */}
              <p className="mb-1">
                <strong>Alias:</strong> MARTINA.LLOPEZZZ
              </p>
              <p className="mb-3">
                <strong>A nombre de:</strong><br/>Martina lopez
              </p>

              <button
                className="btn-varios2"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          )}
        </aside>
      </article>
      <img src={adorno} alt="" width={300} className="mb-5"/>
      
    </section>
    </article>
      <article
        className=" fin d-flex flex-column justify-content-center align-items-center position-relative"
       
      >
        <img src={brillo} alt="" className="brillo brillo-top1" />
        <h4  data-aos="zoom-in-down">¡No podes faltar!</h4>
        <h2  data-aos="zoom-in-down">Martina</h2>
        <img src={brillo} alt="" className="brillo brillo-bottom1" />
      </article>
    </section>
    
    
  );
};

export default Varios;
