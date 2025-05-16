import WhatsappIcon from "../WhatsappIcon";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
    return (
        <div className="font-sans text-gray-700 bg-[#f5f7fa]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #b7c9db75 1px, transparent 0)", backgroundSize: "20px 20px" }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <WhatsappIcon />
            <Header />
            <section className="py-16 px-6  mb-[420px]">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Nossos Serviços</h2>
                    <ul className="space-y-4">
                        <li><strong>Aquecimento Solar:</strong> Sistemas de aquecimento de água com energia solar</li>
                        <li><strong>Manutenção e Suporte:</strong> Serviço técnico para garantir máxima eficiência.</li>
                        <li><strong>Consultoria Energética:</strong> Avaliação de consumo e viabilidade de energia solar.</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
}
