import { FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sección de Marca */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Elixir <span className="text-[#FF9000]">frutal</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Descubre el sabor tropical del mango en su máxima expresión.
          </p>
          <div className="flex gap-4 mt-4 text-[#FF9000] text-2xl">
          </div>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-semibold text-white md:px-10">Productos</h3>
          <ul className="mt-2 text-gray-400 space-y-2 md:px-10">
            <li><a href="#">Todos los productos</a></li>
            <li><a href="#">Jugos naturales</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="font-semibold text-white">Redes sociales</h3>
          <div className="flex gap-4 mt-4 text-[#FF9000] text-2xl">
            
            <a href="https://www.facebook.com/profile.php?id=61572239407939&rdid=v3BR8n6YIDvfHJIW#">
            <FaFacebook />
            </a>
            <a href="https://www.instagram.com/jugos_elixir_frutal?igsh=ZDEwMHR0anl3a3lp">
            <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@elixirfrutal2025?_t=zm-8tgeb1iij4f&_r=1">
            <FaTiktok />
            </a>
            
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-white">Contacto</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FF9000]" />
              Cochabamba, Bolivia
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#FF9000]" />
              +591 ...
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#FF9000]" />
              ....@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
