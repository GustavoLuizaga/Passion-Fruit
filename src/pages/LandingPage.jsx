import Navbar from "../components/Navbar";
import Mango from "../assets/Mango.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="px-5 py-1.5 md:px-32 md:py-20 flex w-full">
                {/* Contenedor del contenido (Texto + Imagen) */}
                <div className="flex flex-col md:flex-row md:justify-between w-full">
                    {/* Contenedor del Texto */}
                    <div className="max-w-[500px] mt-8 md:mt-18">
                        <h1 className="text-5xl md:text-5xl font-bold text-left">
                            Descubre la Delicia del <span className="text-[#FF9000]">Mango</span>
                        </h1>
                        <p className="text-left mt-10 text-[20px]">
                            Jugos Naturales y refrescantes, el auténtico sabor tropical en cada sorbo. Nuestros jugos están hechos con mangos frescos y 100% naturales, perfectos para revitalizar tu día.
                        </p>
                        <Link to ="/products">
                            <button className="w-full bg-[#FEBD01] p-4 rounded-xl text-[16px] text-black font-semibold mt-8 cursor-pointer" >
                                Ver Productos
                            </button>
                        </Link>

                    </div>

                    {/* Contenedor de la Imagen */}
                    <div className="mt-10 md:mt-0 md:ml-5 md:py-0 flex-shrink-0 rounded-lg overflow-hidden w-full md:w-[800px] h-auto mb-5">
                        <img
                            src={Mango}
                            alt="Jugo de Mango"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
