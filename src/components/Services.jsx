import React from "react";
import { useForm, ValidationError } from '@formspree/react';
// Icons
import { RiMailFill, RiCheckboxCircleLine, RiMacFill, RiHandHeartFill, RiPauseCircleFill, RiHealthBookFill, RiStethoscopeFill } from "react-icons/ri";

const Services = () => {
  const [state, handleSubmit] = useForm("xjkbeagg");
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        {state.succeeded ? (
          <div className="flex flex-col items-center justify-center py-8 px-4 bg-white rounded-xl shadow-md">
            <RiCheckboxCircleLine className="text-green-500 text-6xl mb-4" />
            <p className="text-2xl font-semibold text-gray-800 mb-2">¡Gracias por contactarnos!</p>
            <p className="text-gray-500 text-center">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-[40px] font-bold">Necesitas contactarnos</h1>
            <p className="text-[20px] text-gray-500">
              Ingresa por favor tu correo y alguien de nuestro equipo se contactará contigo.
            </p>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                  placeholder="Ingresa tu correo"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="relative mb-4">
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 py-4 pl-4 pr-4 rounded-xl outline-none"
                  placeholder="Escribe tu mensaje"
                  rows="5"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full font-semibold py-2 px-6 bg-primary text-white rounded-xl"
              >
                Enviar
              </button>
            </form>
          </>
        )}
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
          <h3 className="text-[20px] font-bold">Kinesiología</h3>
          <p className="text-gray-500">
            Kinesiología corporativa y particular
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;