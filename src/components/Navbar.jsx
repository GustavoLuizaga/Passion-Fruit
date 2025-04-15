import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiPhone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO MARACUYA 2.jpg";

const links = [
    { label: "INICIO", to: "/" },
    { label: "PRODUCTOS", to: "/products" },
    { label: "CONÓCENOS", to: "/knowUs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white text-black shadow-md py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
                {/* Izquierda: Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/">
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-16 h-16 rounded-full "
                        />

                    </NavLink>
                </div>

                {/* Centro: Menú principal */}
                <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative transition-colors duration-300 hover:text-yellow-400 ${isActive
                                        ? "text-yellow-400 after:absolute after:left-0 after:-bottom-6 after:w-full after:h-0.5 after:bg-yellow-400"
                                        : "text-gray-700"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Íconos para móvil */}
                <div className="flex items-center space-x-4 md:hidden">
                    <FiSearch size={20} />
                    <FiHeart size={20} />
                    <FiUser size={20} />
                    <FiShoppingCart size={20} />

                    {/* Botón hamburguesa */}
                    <button
                        className="text-3xl ml-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Íconos para escritorio */}
                <div className="hidden md:flex items-center space-x-4">
                    <FiSearch size={20} />
                    <FiPhone size={20} />
                    <FiUser size={20} />
                    <FiShoppingCart size={20} />
                </div>
            </div>

            {/* Menú desplegable móvil */}
            {isOpen && (
                <div className="md:hidden bg-white w-full p-4 space-y-3">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                            className={({ isActive }) =>
                                `block text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${isActive
                                    ? "text-yellow-700 underline font-semibold"
                                    : "text-gray-800 hover:text-yellow-700"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
