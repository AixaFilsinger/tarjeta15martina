const Portada = () => {
  const texto = "Martina"; // 👉 poné el texto que quieras
  const texto2 = "Mis quince años"; // 👉 poné el texto que quieras
  return (
    <section className="portada">
      <aside className="textos">
        <h1 className="enfoque">
          {texto.split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h1>
        <h2 className="enfoque ms-5">
          {texto2.split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra === " " ? "\u00A0" : letra}
            </span>
          ))}
        </h2>
      </aside>
    </section>
  );
};

export default Portada;
