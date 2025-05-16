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
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Portfólio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">Projeto Residencial - São Paulo</div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">Projeto Comercial - Campinas</div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">Projeto Rural - Minas Gerais</div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
