import React, { useState } from "react";
// Icons
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-end w-full py-4 px-8 h-[10vh] z-50 bg-bgfont100">
      <div className="flex-shrink-0">
        <a
          href="#"
          className="text-1xl font-bold flex items-center"
        >
          <img
            src="logo-AMAUR.png"
            alt="Amaur Logo"
            className="h-16 md:h-20"
          />
        </a>
      </div>
      <nav
        className={`fixed top-0 left-0 w-[80%] md:w-[40%] xl:w-auto h-full xl:h-auto xl:relative xl:flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 bg-bgfont100 ${showMenu ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 z-50`}
      >
        <a href="#home" className="py-2 xl:py-0">Inicio</a>
        <a href="#aboutUs" className="py-2 xl:py-0">Quienes somos</a>
        <a href="#aboutUs" className="py-2 xl:py-0">Clientes</a>
        <a href="#services" className="py-2 xl:py-0">Servicios</a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
