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
            <section className="py-16 px-6 mb-[460px]">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Sobre Nós</h2>
                    <p className="mb-4">A Solar Ribeiro é especializada em soluções sustentáveis, oferecendo aquecedores solares, sistemas fotovoltaicos e consultoria ambiental personalizada para residências e empresas.</p>
                    <p>Com anos de experiência no mercado, buscamos sempre inovação, qualidade e compromisso com o meio ambiente, garantindo conforto e economia para nossos clientes.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
