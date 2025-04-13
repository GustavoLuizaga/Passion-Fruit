import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
const Card = ({ image, title, description, size, price, onClick }) => {
    return (
        <div className="max-w-sm h-full flex flex-col justify-between rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4 flex flex-col flex-grow">
                <div className="font-bold text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base flex-grow">
                    {description}
                </p>
                <div className="mt-6 flex justify-between items-center">
                    <p>Tamaño: {size}</p>
                    <p className="text-right text-2xl font-bold">
                        <span className="text-[#FF9000]">Bs {price}</span>
                    </p>
                </div>
                <button
                    className="w-full bg-[#ffb525] p-2.5 rounded-xl mt-6 font-semibold cursor-pointer hover:bg-[#e89e15] transition-colors duration-300 flex items-center justify-center gap-2 text-[#3A1F0F]"
                    onClick={onClick}
                >
                    <FaWhatsapp className="text-xl" />
                    Realizar Pedido
                </button>

            </div>
        </div>
    );
};


Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
