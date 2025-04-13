import { FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sección de Marca */}
        <div>
          <h2 className="text-xl font-bold text-[#ffb525]">
            <span className="text-white">PASSION</span> FRUIT
          </h2>
          <p className="text-gray-400 mt-2">
            Descubre el sabor tropical de la Maracuyá en su máxima expresión.
          </p>
          <div className="flex gap-4 mt-4 text-[#ffb525] text-2xl">
          </div>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-semibold text-white md:px-10">Productos</h3>
          <ul className="mt-2 text-gray-400 space-y-2 md:px-10">
            <li><Link to="/products">Todos los productos</Link></li>
            <li><Link to="/products">Laminas de maracuyá</Link></li>
            <li><Link to="/products">Harina de maracuyá</Link></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="font-semibold text-white">Redes sociales</h3>
          <div className="flex gap-4 mt-4 text-[#ffb525] text-2xl">
            
            <a href="#">
            <FaFacebook />
            </a>
            <a href="#">
            <FaInstagram />
            </a>

            <a href="#">
            <FaTiktok />
            </a>

            
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-white">Contacto</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FEBD01]" />
              Cochabamba, Bolivia
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#FEBD01]" />
              +591 
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#FEBD01]" />
              correo@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
