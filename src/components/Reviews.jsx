import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  const teamMembers = [
    {
      name: 'Nicolas P.',
      title: 'Ingeniero desarrollador',
      imgSrc: 'https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg',
    },
    {
      name: 'Barbara G.',
      title: 'Terapeuta ocupacional',
      imgSrc: 'https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg',
    },
    {
      name: 'Camila E.',
      title: 'Kinesiologa',
      imgSrc: 'https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg',
    },
    {
      name: 'Elizabeth G.',
      title: 'Gerenta de marketing',
      imgSrc: 'https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg',
    },

  ];

  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">


      <div className="flex flex-col items-center py-16 bg-gray-100">
        <div className="flex flex-row items-start justify-center gap-16">
          {/* ¿Qué nos motiva? */}
          <div className="flex flex-col items-center w-1/2">
            <h1 className="text-[40px] text-center font-black mb-8">¿Qué nos motiva?</h1>
            <div className="flex flex-col justify-center gap-4">
              <p className="max-w-2xl text-left text-gray-500 mb-4">
                Queremos mejorar la calidad de vida de aquellos que, por diversos motivos, sufren de tensiones y malestares musculares, mediante la ejecución de masajes relajantes y descontracturantes.
              </p>
              <p className="max-w-2xl text-left text-gray-500">
                Queremos entregar una experiencia, acompañada de aromas, sonidos y sensaciones, promoviendo así el alivio de tensiones y mejoras en la productividad durante espacios activos de la jornada laboral.
              </p>
            </div>
          </div>

          {/* ¿Quiénes somos? */}
          <div className="flex flex-col items-center w-1/2">
            <h1 className="text-[40px] text-center font-black mb-8">¿Quiénes somos?</h1>
            <div className="flex justify-center gap-4">
              <p className="max-w-2xl text-left text-gray-500">
                Somos un grupo de profesionales dedicado a proporcionar salud y bienestar a las personas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.imgSrc}
                className="w-11 h-11 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
              />
              <h3 className="text-center text-black font-bold">{member.name}</h3>
              <h5 className="text-center text-xs text-gray-500">{member.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
