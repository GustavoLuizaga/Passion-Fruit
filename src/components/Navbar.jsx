import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Iconos de hamburguesa y cerrar
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú en móviles

    return (
        <nav className="bg-[#FEBD01] shadow-md p-1.5">
           <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start px-8 md:ml-[5rem]">
                {/* LOGO */}
                <img src={Logo} alt="logo" className="w-16 h-16" />

                {/* MENÚ - Oculto en pantallas pequeñas */}
                <ul className="hidden md:flex  px-32 space-x-16 text-lg font-semibold">
                    <li><a href="/" className="hover:text-white">Home</a></li>
                    <li><a href="#productos" className="hover:text-white">Productos</a></li>
                    <li><a href="#conocenos" className="hover:text-white">Conócenos</a></li>
                    <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
                </ul>

                {/* BOTÓN HAMBURGUESA - SOLO APARECE EN PANTALLAS PEQUEÑAS */}
                <button 
                    className="md:hidden text-3xl text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {/* MENÚ RESPONSIVO - SOLO SE MUESTRA CUANDO `isOpen` ES `true` */}
            <div className={`md:hidden flex flex-col bg-[#FEBD01] absolute top-16 left-0 w-full p-4 space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <a href="#home" className="block text-lg hover:text-white">Home</a>
                <a href="#productos" className="block text-lg hover:text-white">Productos</a>
                <a href="#conocenos" className="block text-lg hover:text-white">Conócenos</a>
                <a href="#contacto" className="block text-lg hover:text-white">Contacto</a>
            </div>
        </nav>
    );
};

export default Navbar;
