import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Activa la energía",
    "Mantén tu ritmo",
    "Aumenta tu bienestar",
    "Utiliza tu fuerza",
    "Renueva tu ánimo",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setVisible(true);
      }, 500); // Tiempo de la transición (0.5 segundos)
    }, 3000); // Cambiar texto cada 3 segundos
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-10 relative bg-cover bg-center"
      style={{ backgroundImage: `url('Mallsur1.png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b to-[#15514187] from-[#000000] opacity-75"></div>
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16 relative z-10">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-5xl xl:text-6xl font-serif xl:leading-[7.5rem] text-white">
            <span className={`word-transition ${visible ? "visible" : ""}`}>
              {texts[currentText]}
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl leading-[1.9rem] max-w-3xl mx-auto">
            Especializados en realizar masajes relajantes y descontracturantes, brindando una experiencia única a las empresas y colaboradores. Te invitamos a encontrar el alivio que necesitas.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-3 px-8 rounded-xl text-xl shadow-md">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

