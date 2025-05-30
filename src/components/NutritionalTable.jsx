import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GiHerbsBundle, GiChemicalDrop } from 'react-icons/gi';
import { TbMeatOff } from 'react-icons/tb';


const Nutricion = ({ datos }) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const toggleContenido = () => {
    setMostrarContenido(prev => !prev);
  };

  return (
    <div className="px-2 bg-white rounded-lg">
      <button
        onClick={toggleContenido}
        className="flex items-center justify-between w-full text-left focus:outline-none"
      >
        <h2 className="text-3xl font-bold text-gray-900">Información Nutricional</h2>
        <ChevronDown
          size={28}
          className={`text-[#FFB525] transition-transform duration-300 ${mostrarContenido ? 'rotate-180' : ''
            }`}
        />
      </button>

      {mostrarContenido && (
        <div className="overflow-x-auto mt-4 transition-all duration-300 ease-in-out">
          <h1 className="text-xl font-semibold mb-4 text-center text-amber-400">Por porción de 30g</h1>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-[#FFB525] font-semibold text-gray-800 text-center text-xl">
                  Nutriente
                </th>
                <th className="px-6 py-3 border-b-2 border-[#FFB525] font-semibold text-gray-800 text-center text-xl">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {Object.entries(datos).map(([nutriente, valor]) => (
                <tr key={nutriente} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-center capitalize">{nutriente}</td>
                  <td className="px-6 py-3 font-medium text-[#7A4E2D] text-center">{valor}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-16 gap-6 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f3bf55] flex items-center justify-center ">
                <GiHerbsBundle className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Sin Conservantes </h4>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f3bf55]  flex items-center justify-center ">
                <GiChemicalDrop className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Sin Quimicos </h4>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f3bf55]  flex items-center justify-center ">
                <TbMeatOff className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Sin Gelatina </h4>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

Nutricion.propTypes = {
  datos: PropTypes.shape({
    calorias: PropTypes.string.isRequired,
    proteinas: PropTypes.string.isRequired,
    grasas: PropTypes.string.isRequired,
    carbohidratos: PropTypes.string.isRequired,
    azucar: PropTypes.string.isRequired,
    fibra: PropTypes.string.isRequired,
    sodio: PropTypes.string.isRequired,
    potasio: PropTypes.string,
    fosforo: PropTypes.string,
    hierro: PropTypes.string,
    vitaminaA: PropTypes.string,
    vitaminaB1: PropTypes.string,
    vitaminaB2: PropTypes.string,
    vitaminaB3: PropTypes.string,
    vitaminaC: PropTypes.string,
  }).isRequired,
};

export default Nutricion;
