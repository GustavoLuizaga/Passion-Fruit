import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Card from "../components/Card";

const Products = () => {
    return (
        <div className="">
            <Navbar />
            <h1 className="text-5xl md:text-5xl font-bold text-left md:px-32 px-5 py-8 ">
                Jugos Naturales
            </h1>
            <div className="mt-5 md:px-32 flex justify-center mb-15">
            <Card />
            </div>
            <Footer />
            
        </div>
        
    );
};

export default Products;