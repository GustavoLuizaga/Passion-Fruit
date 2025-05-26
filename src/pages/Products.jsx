import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Producto1 from "../assets/p1.jpg";
import Producto2 from "../assets/p2.jpg";

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
                        image={Producto1}
                        title="Láminas de fruta deshidratada sabor maracuyá"
                        description="Deliciosas láminas de maracuyá 100% natural, sin azúcares añadidos. Perfectas como snack saludable, ricas en vitamina C y antioxidantes. Sabor intenso y textura crujiente."
                        size="5 uds"
                        price={20.00}
                        extraData={{
                            images: ["https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/Borrame%2FIMG_20250514_133838.jpg?alt=media&token=a6d38cce-18bd-4aad-9de9-f3817a6f980d",
                                "https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/Borrame%2FIMG_20250514_134411.jpg?alt=media&token=782563bf-5cf5-4dbd-bcfd-4578831ddc35",
                                "https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/Borrame%2FIMG_20250514_134656.jpg?alt=media&token=a5835f5d-4a30-43b3-b762-b00a064d3fa4"
                            ],  // tus imágenes reales
                            manejoEnvaseCerrado: "Guardar en lugar fresco y seco.",
                            manejoEnvaseAbierto: "Consumir en 3 días.",
                            caracteristicasEnvase: "Envase reciclable y hermético."
                        }}
                    />

                    <Card
                        image={Producto2}
                        title="Láminas de fruta deshidratada sabor maracuyá"
                        description="Deliciosas láminas de maracuyá 100% natural, sin azúcares añadidos. Perfectas como snack saludable, ricas en vitamina C y antioxidantes. Sabor intenso y textura crujiente."
                        size="-"
                        price={0.00}
                        extraData={{
                            images: ["https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/borrame%202%2FIMG_20250514_143128.jpg?alt=media&token=3085bed0-414b-4778-90f5-49cd80665f27",
                                "https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/borrame%202%2FIMG_20250514_143116.jpg?alt=media&token=bdda2b25-d99d-4647-b58e-e960c6ec053e",
                                "https://firebasestorage.googleapis.com/v0/b/connectway-867ac.appspot.com/o/borrame%202%2FIMG_20250514_134712.jpg?alt=media&token=4af256c4-28d7-4d88-a2bd-0775793c5564"],
                            manejoEnvaseCerrado: "Almacenar en lugar seco.",
                            manejoEnvaseAbierto: "Refrigerar después de abrir.",
                            caracteristicasEnvase: "Bolsa resellable."
                        }}
                    />


                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;
