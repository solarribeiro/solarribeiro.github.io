import WhatsappIcon from "./WhatsappIcon";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-700 bg-[#f5f7fa]"
      style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #b7c9db75 1px, transparent 0)", backgroundSize: "20px 20px" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <WhatsappIcon />
      <Header />

      <section className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('exemplo_1.jpeg')", height: "500px", backgroundPositionY: "center" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl font-extralight mb-4">Oferecemos As Melhores Soluções em <br></br><b className="font-bold">Aquecimento Solar</b>, <b className="font-bold">Banho</b> e <b className="font-bold">Piscina</b></h2>
          <Link href="https://api.whatsapp.com/send/?phone=5511961672352&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" className="bg-[#e5930d] hover:bg-[#dd7e0e] px-6 py-3 text-white font-bold rounded-full">Entre em Contato</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center mb-12">
          <p className="text-yellow-500 font-semibold">Características que nos destacam no mercado</p>
          <h3 className="text-3xl font-bold text-blue-900">Nossas Funcionalidades</h3>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            {/* <Image src="solar-worker-1.jpg" className="mb-4 rounded" alt=""></Image> */}
            <h4 className="font-semibold text-lg mb-2">Energia Solar ao Em Várias Regiões</h4>
            <p className="text-m text-gray-600">Levamos a tecnologia de aquecimento solar a diversas regiões do Brasil, promovendo economia de energia elétrica
              e mais sustentabilidade para as famílias e empresas.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            {/* <Image src="solar-worker-2.jpg" className="mb-4 rounded" alt=""></Image> */}
            <h4 className="font-semibold text-lg mb-2">Estabilidade e Conforto</h4>
            <p className="text-m text-gray-600">Oferecemos soluções estáveis que proporcionam segurança e conforto aos nossos
              clientes.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            {/* <Image src="solar-roof.jpg" className="mb-4 rounded" alt=""></Image> */}
            <h4 className="font-semibold text-lg mb-2">Recurso Renovável</h4>
            <p className="text-m text-gray-600">Utilizamos energia limpa e renovável para preservar o meio ambiente e reduzir
              custos.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#25374f] text-white">
        <div className="container mx-auto flex flex-col p-4 md:flex-row md:justify-center md:gap-32">
          <div className="text-center p-2 order-first md:order-last md:mt-16">
            <h1 className="font-semibold mb-2 text-4xl">Energia Inteligente</h1>
            <p className="text-2xl text-gray-400 mb-6 md:max-w-96">Transforme a luz do sol em conforto e economia com nosso sistema de aquecimento solar,
              ideal para residências e empresas.</p>
            <Link href="https://api.whatsapp.com/send/?phone=5511961672352&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" className="bg-transparent hover:bg-[#e5930d] outline-solid outline-white transition-all px-6 py-3 text-white font-bold rounded-full md:float-right md:mr-4">Saiba Mais</Link>
          </div>
          <div className="p-4 order-last md:order-first">
            <Image src="/exemplos_1_placa_solar.png" alt="Exemplos placa solar" width={500} height={500}></Image>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
