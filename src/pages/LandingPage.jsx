import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="px-6 py-8 md:px-32 md:py-32 flex flex-col items-start max-w-[700px]">
                <h1 className="text-5xl md:text-5xl font-bold text-left">
                    Descubre la Delicia del <span className="text-[#FF9000]">Mango</span>
                </h1>
                <p className="text-left mt-4">
                    Jugos Naturales y refrescantes
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
