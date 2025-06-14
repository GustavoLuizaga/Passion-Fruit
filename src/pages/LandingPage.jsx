import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Producto from "../assets/Maracuyá.jpg";
import CardValue from "../components/CardValue";
import { FaLeaf, FaRecycle, FaHeartbeat, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            {/* Sección con fondo amarillo */}
            <section className="bg-[#FFB525] text-white">
                <Navbar />

                <div className="max-w-7xl mx-auto px-4 md:px-8 py-44">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

                        {/* Texto a la izquierda */}
                        <div className="lg:w-1/2 text-left">
                            <h1 className="text-5xl md:text-5xl mb-6 font-bold leading-tight text-[#3A1F0F]">
                                SABOR QUE NACE DE LA NATURALEZA

                            </h1>

                            <p className="mt-6 text-lg md:text-xl text-[#7A4E2D] leading-relaxed">
                                En <span className="font-bold">PASSION FRUIT</span> transformamos lo mejor de las frutas naturales en productos únicos, saludables y llenos de sabor. Nuestras láminas de fruta deshidratada son solo el comienzo; cada creación refleja nuestra pasión por lo auténtico, lo nutritivo y lo delicioso.
                            </p>
                            <div className="mt-8 w-full">
                                <button className="bg-[#2E7D32] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-[#388E3C] transition-colors duration-300 w-full" onClick={() => navigate('/products')}>
                                    Ver productos
                                </button>


                            </div>

                        </div>

                        <div className="lg:w-1/2 w-full flex">
                            <img
                                src={Producto}
                                alt="Producto de limpieza"
                                className="self-end rounded-xl shadow-lg w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección con fondo blanco */}
            <section className="bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-center">¿Por qué Passion Fruit es diferente?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                            <CardValue title="Productos 100% naturales" icon={<FaLeaf />}>
                                Elaboramos productos que aprovechan las propiedades de las frutas al máximo
                                .
                            </CardValue>
                            <CardValue title="Contribuimos al medio ambiente" icon={<FaRecycle />}>
                                Aprovechamos lo que otros desechan para ofrecer opciones innovadoras
                                .
                            </CardValue>
                            <CardValue title="Cuidamos tu salúd" icon={<FaHeartbeat />}>
                                Con productos elaborados de forma artesanal, libres de aditivos, químicos y azúcares procesados
                                .
                            </CardValue>
                            <CardValue title="Mas que socios somos, un equipo" icon={<FaUsers />}>

                                Valoramos y recompensamos el trabajo arduo de nuestros proveedores para el crecimiento de ambas partes.
                            </CardValue>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default LandingPage;
