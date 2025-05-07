import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';

const DescriptionProduct = () => {
    const { title } = useParams();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-8 md:px-8 py-32">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        {title}
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DescriptionProduct