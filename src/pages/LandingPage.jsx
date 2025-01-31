import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="px-5 py-8 md:px-32 md:py-40
             flex flex-col items-start max-w-[700px]">
                <h1 className="text-5xl md:text-5xl font-bold text-left">
                    Descubre la Delicia del <span className="text-[#FF9000]">Mango</span>
                </h1>
                <p className="text-left mt-8 text-[20px]">
                    Jugos Naturales y refrescantes, el auténtico sabor tropical en cada sorbo.Nuestros jugos estan hechos con mangos frescos y 100% naturales, perfectos para revitalizar tu dia.
                </p>
                <button className="w-full bg-amber-300 p-4 rounded-xl text-[16px] font-semibold mt-8">
                    Ver Productos
                </button>
                
            </div>
        </div>
    );
};

export default LandingPage;
