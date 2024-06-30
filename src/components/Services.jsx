import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill, RiHandHeartFill, RiPauseCircleFill, RiHealthBookFill, RiStethoscopeFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Necesitas contactarnios</h1>
        <p className="text-[20px] text-gray-500">
          Ingresa porfavor tu correo y alguien de nuestro equipo se contactara contigo
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Ingresa tu correo"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiHandHeartFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Masajes</h3>
          <p className="text-gray-500">
            Masajes corporativos y particulares
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiPauseCircleFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Pausa activa</h3>
          <p className="text-gray-500">
            Pausa activa para organizaciones, empresas y fundaciones
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiHealthBookFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Terapia ocupacional</h3>
          <p className="text-gray-500">
            Terapia ocupacional corporativa y particular
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiStethoscopeFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Kinesiolgia</h3>
          <p className="text-gray-500">
            Kinesiologia corporativa y particular
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
