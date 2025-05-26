import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useLocation } from 'react-router-dom';
import Nutricion from "../components/NutritionalTable";
import { useState } from "react";
import CardValue from "../components/CardValue";
import { TbBottle, TbBottleOff } from 'react-icons/tb';

const DescriptionProduct = () => {
    const { title } = useParams();
    const location = useLocation();

    const {
        images = [],
        description = "No hay descripción disponible.",
        manejoEnvaseCerrado = "No especificado.",
        manejoEnvaseAbierto = "No especificado.",
        caracteristicasEnvase = ""
    } = location.state || {};

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (img) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            <Navbar />

            {/* Primer main: hasta características del envase */}
            <main className="flex-1 bg-[#FFB525]">
                <div className="max-w-7xl mx-auto px-8 md:px-8 py-32">
                    <h1 className="text-4xl text-center font-bold text-[#3A1F0F] mb-8">
                        {title}
                    </h1>

                    {/* Galería de imágenes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-md cursor-zoom-in hover:scale-105 transition-transform"
                                onClick={() => openModal(img)}
                            />
                        ))}
                    </div>

                    {/* Descripción */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-10">
                        Descripción del Producto
                    </h1>
                    <p>{description}</p>

                    {/* Características del envase */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-10">
                        Características del envase
                    </h1>
                    <p>{caracteristicasEnvase}</p>
                </div>
            </main>

            {/* Segundo main: desde manejo del producto */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-8 md:px-8 py-4">
                    {/* Manejo del producto */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-10">
                        Manejo del producto
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                        <CardValue title="Envase Abierto" icon={<TbBottleOff className="text-3xl text-[#FFB525]" />}>
                            {manejoEnvaseAbierto}
                        </CardValue>

                        <CardValue title="Envase Cerrado" icon={<TbBottle className="text-3xl text-[#FFB525]" />}>
                            {manejoEnvaseCerrado}
                        </CardValue>
                    </div>

                    {/* Tabla nutricional */}
                    <div className="mt-12">
                        <Nutricion datos={{
                            calorias: "98.86 kcal",
                            proteinas: "2.58 g",
                            grasas: "0.14 g",
                            carbohidratos: "25.18 g",
                            azucar: "11.56 g",
                            fibra: "1.88 g",
                            sodio: "7.55 mg",
                            potasio: "77.88 mg",
                            fosforo: "0.94 mg",
                            hierro: "0.10 mg",
                            vitaminaA: "1.10 mg",
                            vitaminaB1: "0.04 mg",
                            vitaminaB2: "0.11 mg",
                            vitaminaB3: "0.76 mg",
                            vitaminaC: "18.70 mg",
                        }} />
                    </div>
                </div>
            </main>

            <Footer />

            {/* Modal de imagen ampliada */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <img
                        src={selectedImage}
                        alt="Vista ampliada"
                        className="max-w-full max-h-[90%] rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default DescriptionProduct;
