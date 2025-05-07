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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6 justify-items-center">
                    <Card
                        image={Producto}
                        title="Láminas de fruta deshidratada sabor maracuyá"
                        description="Deliciosas láminas de maracuyá 100% natural, sin azúcares añadidos. Perfectas como snack saludable, ricas en vitamina C y antioxidantes. Sabor intenso y textura crujiente."
                        size="5 uds"
                        price="20.00"
                        onClick={() => window.location.href = "/comprar/maracuya"}
                    />
                    <Card
                        image={Producto}
                        title="Producto 2"
                        description="Descripcion del producto 2."
                        size="600ml"
                        price="-"
                        onClick={() => window.location.href = "/comprar/tropical"}
                    />
                
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;
