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
            <section className="py-16 px-6 mb-[200px]">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Fale Conosco</h2>
                    <form className="space-y-4 max-w-xl">
                        <input type="text" placeholder="Nome" className="w-full p-3 border rounded"></input>
                        <input type="email" placeholder="E-mail" className="w-full p-3 border rounded"></input>
                        <textarea placeholder="Mensagem" rows={5} className="w-full p-3 border rounded"></textarea>
                        <button type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">Enviar</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}
