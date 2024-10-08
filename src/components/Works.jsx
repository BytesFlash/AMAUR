import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Somos un equipo comprometido con nuestros colaboradores
        </h1>
        <p className="text-xl text-gray-500">
          Aquí podrás ver imágenes que reflejan nuestro compromiso y dedicación en cada servicio que ofrecemos.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="masa-emp.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">20 de marzo, 2024</p>
          <h3 className="text-2xl font-bold">Ghh</h3>
          <p className="text-gray-500">
            Nuestra primera colaboración con la empresa Ghh representa una alianza
            muy importante. Esta asociación se centra en proporcionar soluciones de
            bienestar para empresas cuyos trabajadores pasan largas  horas cargando
            objetos, como amaur ayudamos a mejorar su salud y productividad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="masa-ghh1.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">22 de marzo, 2024</p>
            <h3 className="text-2xl font-bold">
              Visita a empresa enfocada en la reparación y venta de maquinaria minera
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="masa-MGS1.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">2 de abril, 2024</p>
            <h3 className="text-2xl font-bold">
              Visita a empresa enfocada en la reparación y venta de maquinaria minera
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="mgs-cam1.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">15 de abril, 2024</p>
            <h3 className="text-2xl font-bold">
              MGS empresa dedicada a la venta de repuestos de camiones
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="Mallsur1.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">06 de julio, 2024</p>
            <h3 className="text-2xl font-bold">
              Evento a beneficio de Jocelyn.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
