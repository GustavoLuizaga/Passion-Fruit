import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/TimeLine";
import CardInfo from "../components/CardInfo";
import CardValue from "../components/CardValue";
import { FaLightbulb, FaShieldAlt,FaUsers, FaHeartbeat, FaRecycle, FaLeaf } from "react-icons/fa";

const KnowUs = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-24">
                {/* Timeline */}
                <Timeline />
                <h2 className="text-4xl font-bold mb-6 text-center">Nuestra Misión y Visión </h2>
                {/* Misión y Visión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">

                    <CardInfo
                        title="Nuestra Misión"
                        icon={<FaLightbulb />}
                    >
                        Elaborar productos naturales que promuevan y contribuyan a la salud de los consumidores que deseen su bienestar personal, del medio ambiente y de la sociedad
                    </CardInfo>

                    <CardInfo
                        title="Nuestra Visión"
                        icon={<FaShieldAlt />}
                    >
                        Ser la marca líder en Bolivia en productos derivados de la maracuyá,
                        reconocida por nuestra innovación, calidad y compromiso con la satisfacción del cliente.
                    </CardInfo>
                </div>

                {/* Nuestros Valores */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-center">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                        <CardValue title="Productos 100% naturales" icon={<FaLeaf />}>
                            Elaboramos productos que aprovechan las propiedades de las frutas al máximo
                            .
                        </CardValue>
                        <CardValue title="Contribuimos al medio ambiente" icon={<FaRecycle  />}>
                            Aprovechamos lo que otros desechan para ofrecer opciones innovadoras
                            .
                        </CardValue>
                        <CardValue title="Cuidamos tu salúd" icon={<FaHeartbeat />}>
                            Con productos elaborados de forma artesanal, libres de aditivos, químicos y azúcares procesados
                            .
                        </CardValue>
                        <CardValue title="Mas que socios somos, un equipo" icon={<FaUsers  />}>

                        Valoramos y recompensamos el trabajo arduo de nuestros proveedores para el crecimiento de ambas partes.
                        </CardValue>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};


export default KnowUs;