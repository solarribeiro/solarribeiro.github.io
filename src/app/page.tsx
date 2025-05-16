import WhatsappIcon from "./WhatsappIcon";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-700 bg-[#f5f7fa]"
      style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #b7c9db75 1px, transparent 0)", backgroundSize: "20px 20px" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <WhatsappIcon />
      <Header/>

      <section className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('exemplo_1.jpeg')", height: "500px", backgroundPositionY: "center" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-bold mb-4">Oferecemos As Melhores Soluções em Aquecimento Solar</h2>
          <a href="#" className="bg-[#e5930d] hover:bg-[#dd7e0e] px-6 py-3 text-white font-bold rounded-full">Saiba Mais</a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center mb-12">
          <p className="text-green-500 font-semibold">Características que nos destacam no mercado</p>
          <h3 className="text-3xl font-bold text-blue-900">Nossas Funcionalidades</h3>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <Image src="solar-worker-1.jpg" className="mb-4 rounded" alt=""></Image>
            <h4 className="font-semibold text-lg mb-2">Energia ao Em Várias Regiões</h4>
            <p className="text-sm text-gray-600">Levamos a tecnologia de aquecimento solar para diversas partes do brasil,
              promovendo acesso sustentável à eletricidade.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <Image src="solar-worker-2.jpg" className="mb-4 rounded" alt=""></Image>
            <h4 className="font-semibold text-lg mb-2">Estabilidade e Conforto</h4>
            <p className="text-sm text-gray-600">Oferecemos soluções estáveis que proporcionam segurança e conforto aos nossos
              clientes.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <Image src="solar-roof.jpg" className="mb-4 rounded" alt=""></Image>
            <h4 className="font-semibold text-lg mb-2">Recurso Renovável</h4>
            <p className="text-sm text-gray-600">Utilizamos energia limpa e renovável para preservar o meio ambiente e reduzir
              custos.</p>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
}
