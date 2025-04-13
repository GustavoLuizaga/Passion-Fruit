import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Producto from "../assets/Maracuyá.jpg";

const Products = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-8 md:px-8 py-32">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Todos los productos
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                    <Card
                        image={Producto}
                        title="Jugo de Maracuyá"
                        description="Refrescante jugo natural con el auténtico sabor del maracuyá, perfecto para los días calurosos."
                        size="500ml"
                        price="7.00"
                        onClick={() => window.location.href = "/comprar/maracuya"}
                    />
                    <Card
                        image={Producto}
                        title="Jugo Tropical"
                        description="Mezcla exótica de frutas tropicales con un toque de maracuyá, ideal para cualquier ocasión."
                        size="600ml"
                        price="8.50"
                        onClick={() => window.location.href = "/comprar/tropical"}
                    />
                    <Card
                        image={Producto}
                        title="Jugo Energizante"
                        description="Disfruta de un boost natural con este jugo de maracuyá enriquecido con vitamina C."
                        size="450ml"
                        price="6.50"
                        onClick={() => window.location.href = "/comprar/energizante"}
                    />
                    <Card
                        image={Producto}
                        title="Jugo Detox"
                        description="Purifica tu cuerpo con este jugo detox a base de maracuyá, pepino y limón."
                        size="500ml"
                        price="9.00"
                        onClick={() => window.location.href = "/comprar/detox"}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;
