import React from "react";

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
      imgSrc: 'Camila.png',
    },
    {
      name: 'Elizabeth G.',
      title: 'Gerenta de marketing',
      imgSrc: 'https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg',
    },
  ];

  return (
    <div className="p-8 flex flex-col gap-8 ">
      <div className="flex flex-col items-center py-16 ">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
          {/* ¿Qué nos motiva? */}
          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-[40px] text-center font-black mb-8">¿Qué nos motiva?</h1>
            <div className="flex flex-col justify-center gap-4">
              <p className="max-w-2xl text-justify text-gray-500 mb-4">
                Somos un equipo de especialistas preocupados por el bienestar integral de las personas. Hemos entendido la importancia de equilibrar nuestro cuerpo, mente y alma, para tener un óptimo rendimiento en nuestras funciones diarias. El área laboral es el espacio donde más habitamos, y entendemos la relevancia que tiene sentir comodidad plena en este lugar. Por eso mismo, queremos ofrecer un servicio que pueda mejorar la calidad de vida de aquellos que, por diversos motivos, sufren de tensiones y malestares musculares, mediante la ejecución de masajes relajantes y descontracturantes. Queremos entregar una experiencia, acompañada de aromas, sonidos y sensaciones, permitiendo el alivio de tensiones y mejoras en el desarrollo de funciones.
              </p>
              <p className="max-w-2xl text-justify text-gray-500">
                Queremos entregar una experiencia, acompañada de aromas, sonidos y sensaciones, promoviendo así el alivio de tensiones y mejoras en la productividad durante espacios activos de la jornada laboral.
              </p>
            </div>
          </div>

          {/* ¿Quiénes somos? */}
          <div className="flex flex-col items-center lg:w-1/2">
            <h1 className="text-[40px] text-center font-black mb-8">¿Quiénes somos?</h1>
            <div className="flex justify-center gap-4">
              <p className="max-w-2xl text-justify text-gray-500">
                Somos un equipo interdisciplinario de profesionales dedicado a proporcionar salud y bienestar a las personas. En nuestro equipo contamos con profesionales del área de la salud, como kinesiología y terapia ocupacional, dedicados al cuidado de equipo de las personas que componen las instituciones con las cuales trabajamos en red. Nos especializamos en reconocer las necesidades ergonómicas y hábitos posturales de los trabajadores, para prevenir lesiones y enfermedades laborales futuras.
                Como especialistas en el área de la masoterapia y la salud de la rehabilitación, nos proponemos ofrecer un espacio de confort dentro del espacio laboral.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-2 sm:py-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.imgSrc}
                className="w-20 h-20 object-cover rounded-full ring-4 ring-primary p-1"
                alt={`Foto de ${member.name}`}
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

