import PropTypes from 'prop-types';

const Nutricion = ({ datos }) => {
  return (
    <div className="overflow-x-auto p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold mb-6 text-[#FFB525] text-center">
        Información Nutricional
        <span className="block text-xl text-gray-800 mt-1">
          por porción de 30g
        </span>
      </h2>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-[#FFB525] text-left font-semibold text-gray-800">
              Nutriente
            </th>
            <th className="px-6 py-3 border-b-2 border-[#FFB525] text-left font-semibold text-gray-800">
              Valor
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {Object.entries(datos).map(([nutriente, valor]) => (
            <tr key={nutriente} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-800">
                {nutriente.charAt(0).toUpperCase() + nutriente.slice(1)}
              </td>
              <td className="px-6 py-3 font-medium text-[#7A4E2D]">{valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    potasio: PropTypes.string.isRequired,
    fosforo: PropTypes.string.isRequired,
    hierro: PropTypes.string.isRequired,
    vitaminaA: PropTypes.string.isRequired,
    vitaminaB1: PropTypes.string.isRequired,
    vitaminaB2: PropTypes.string.isRequired,
    vitaminaB3: PropTypes.string.isRequired,
    vitaminaC: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nutricion;
