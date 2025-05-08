import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import Nutricion from "../components/NutritionalTable";
import { MdNature, MdPalette, MdNoFood } from "react-icons/md";

const DescriptionProduct = () => {
    const { title } = useParams();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-8 md:px-8 py-32">
                    <h1 className="text-4xl  text-center font-bold text-gray-900 mb-8">
                        {title}
                    </h1>
                    <div className="">
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
                        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-16">
                            <div className="flex flex-col items-center">
                                <MdNature className="text-4xl text-[#FFB525]" />
                                <span className="text-sm font-bold mt-2">Sin Conservantes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <MdPalette className="text-4xl text-[#FFB525]" />
                                <span className="text-sm  font-bold mt-2">Sin Colorantes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <MdNoFood className="text-4xl text-[#FFB525]" />
                                <span className="text-sm font-bold mt-2">Sin Gelatina</span>
                            </div>
                        </div>
                    </div>



                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DescriptionProduct