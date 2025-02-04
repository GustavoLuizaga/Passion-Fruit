import Mango from "../assets/Mango.jpg";

const Card = () => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={Mango} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">Jugo de Mango </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div className="mt-10 flex justify-between items-center">
                    <p>Tamaño: 600ml</p>
                    <p className="text-right text-2xl font-bold"> <span className="text-[#FF9000]" > Bs 8.00 </span></p>
                </div>
                <button
                    className="w-full bg-[#FEBD01] p-2.5 rounded-xl mt-8 font-semibold cursor-pointer"
                    onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=61572239407939&rdid=v3BR8n6YIDvfHJIW#"}
                >
                    Obtener
                </button>

            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JugosNaturales</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mango</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fresco</span>
            </div>
        </div>
    );
};

export default Card;
