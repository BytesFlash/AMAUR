import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/*     <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer /> */}
      <div className="flex flex-col items-center justify-center h-screen bg-bgfont100 text-black px-4">
        <img src="logo-AMAUR.png" alt="Amaur Logo" className="h-32 mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Estamos trabajando en algo increíble</h1>
        <p className="text-lg md:text-2xl text-center mb-8">Vuelve pronto para ver las novedades.</p>
        <div className="bg-gray-800 text-white bg-opacity-75 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p className="text-lg mb-2">Visita nuestro instagram: <a href="https://www.instagram.com/amaurchile/" className="text-blue-400">@amaurchile</a></p>
          <p className="text-lg">Envíanos un email: <a href="mailto:info@amaur.cl" className="text-blue-400">info@amaur.cl</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
