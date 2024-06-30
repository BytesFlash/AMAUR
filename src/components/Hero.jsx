import React from "react";
import { ReactTyped } from "react-typed";


const Hero = () => {


  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-10 relative bg-cover bg-center" style={{ backgroundImage: `url('Mallsur1.jpg')` }}>
      <div className="absolute inset-0 bg-gradient-to-b to-[#15514187] from-[#fff9f2] opacity-75"></div>
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16 relative z-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-6xl font-sans xl:leading-[7.5rem]">
            <ReactTyped strings={[
              'Activa la energía',
              'Maravillosa experiencia',
              'Aumenta tu bienestar',
              'Utiliza tus recursos',
              'Renueva las fuerzas',

            ]}
              typeSpeed={80}
              backSpeed={70}
              loop>

            </ReactTyped>

          </h1>
          <p className="text-white text-2xl leading-[2.5rem]">

            Especializados en realizar masajes relajantes y descontracturantes, brindando una experiencia única a las empresas y colaboradores. Te invitamos a encontrar el alivio que necesitas.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
