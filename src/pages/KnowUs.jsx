import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/TimeLine";
import CardInfo from "../components/CardInfo";
import CardValue from "../components/CardValue";
import { FaSeedling, FaMedal, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import TeamGrid from "../components/Team";
import { FaLightbulb, FaBinoculars, } from "react-icons/fa";

const KnowUs = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-24">
                <h2 className="text-3xl font-bold mb-4 text-center text-black py-8">¿Quiénes somos?</h2> {/* tamaño de texto reducido */}
                <p className="text-base md:text-lg text-black leading-relaxed text-center">
                    Somos una empresa dedicada a la producción y comercialización de productos naturales derivados de la maracuyá, con el objetivo de ofrecer opciones saludables y sostenibles para nuestros clientes.
                </p>
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
                        icon={<FaBinoculars />}
                    >
                        Ser la marca líder en Bolivia en productos derivados de la maracuyá,
                        reconocida por nuestra innovación, calidad y compromiso con la satisfacción del cliente.
                    </CardInfo>
                </div>
                <TeamGrid />
                {/* Nuestros Valores */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-center">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                        <CardValue title="Pasión por lo natural
                        " icon={<FaSeedling />}>
                            Amamos lo que la tierra nos ofrece y lo transformamos con respeto, cuidando cada detalle para conservar la esencia de la fruta en su forma más pura.

                        </CardValue>
                        <CardValue title="Compromiso con la calidad
                        " icon={<FaMedal />}>
                            Nos aseguramos de que cada producto cumpla con los más altos estándares, ofreciendo siempre frescura, sabor y bienestar en cada presentación.

                        </CardValue>
                        <CardValue title="Innovación saludable
                        " icon={<FaLightbulb />}>
                            Buscamos constantemente nuevas formas de sorprenderte con productos nutritivos, funcionales y deliciosos, sin perder de vista lo natural.


                        </CardValue>
                        <CardValue title="Sostenibilidad
                        " icon={<FaGlobeAmericas />}>

                            Creemos en un futuro más verde. Por eso, aplicamos prácticas responsables con el medio ambiente en cada etapa de nuestra producción.
                        </CardValue>

                        <CardValue title="Cercanía y confianza

                        " icon={<FaHandshake />}>

                            Valoramos la conexión con nuestros clientes, proveedores y aliados. Trabajamos con honestidad y transparencia para construir relaciones duraderas.
                        </CardValue>


                    </div>
                </div>


            </div>

            <Footer />
        </div>
    );
};


export default KnowUs;