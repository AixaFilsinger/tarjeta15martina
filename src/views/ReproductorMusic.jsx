import { useState, useRef } from "react";

const ReproductorMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // 1. SOLUCIÓN para 416 (Range Not Satisfiable) al cargar
  // Este evento se dispara cuando los metadatos (como la duración) ya están cargados.
  // Es una buena práctica para asegurar que 'duration' no sea NaN.
  const handleLoadedMetadata = () => {
    // Si necesitas hacer algo con la duración aquí, puedes hacerlo.
    // Por ejemplo, mostrar la duración total de la pista.
    // console.log("Duración del audio:", audioRef.current.duration);
  };

  const togglePlay = () => {
    // Verificamos si el 'current' está disponible
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Usamos .then() para manejar promesas de 'play()', evitando warnings o errores
      audioRef.current.play().catch(error => {
        // Maneja errores de reproducción (ej: el usuario no ha interactuado aún)
        console.error("Error al intentar reproducir:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current || !audioRef.current.duration) {
      setProgress(0);
      return;
    }
    const progressPercent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progressPercent);
  };

  // 2. FUNCIÓN para manejar el fin de la pista
  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    // Opcional: reiniciar al principio
    audioRef.current.currentTime = 0;
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    
    // Verificamos que el audio esté disponible y tenga duración
    if (audioRef.current && audioRef.current.duration) {
      const newTime = (newProgress * audioRef.current.duration) / 100;
      audioRef.current.currentTime = newTime;
    }
    setProgress(newProgress);
  };

  return (
    <section className="container text-center mt-5 mb-5" data-aos="fade-up">
      <h3 className="dalePlay">Dale Play a mi canción favorita</h3>
      <div className="music-player-card text-center my-4">
        <p className="song-title">Clocks - Coldplay</p>
        <div className="controls d-flex justify-content-center gap-3">
          <button className="btn-music" onClick={togglePlay}>
            {isPlaying ? (
              <i className="bi bi-pause-fill"></i>
            ) : (
              <i className="bi bi-play-fill"></i>
            )}
          </button>
        </div>
        <input
          type="range"
          className="progress-bar"
          min="0" // Asegúrate de tener min/max para el input[type="range"]
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />
        {/* Componente <audio> mejorado */}
        <audio
          ref={audioRef}
          src="/music/ari.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata} // Añadido
          onEnded={handleAudioEnd} // Añadido
          preload="auto"
        ></audio>
      </div>
    </section>
  );
};

export default ReproductorMusic;
