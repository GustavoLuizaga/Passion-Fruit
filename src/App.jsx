import { useState } from 'react';
import Logo from './assets/logo.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        {/* Contenedor del logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Botón de menú hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Opciones del menú */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-700 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto`}
        >
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </>
  );
}

export default App;
