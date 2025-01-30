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
                    Jugos Naturales y refrescantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod dolores exercitationem qui ducimus similique est iure provident, asperiores tenetur, illum totam labore a, esse earum consequuntur ipsa corrupti quas.
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
