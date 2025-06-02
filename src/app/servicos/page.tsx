import WhatsappIcon from "../WhatsappIcon";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-sans text-gray-700 bg-[#f5f7fa]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #b7c9db75 1px, transparent 0)", backgroundSize: "20px 20px" }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <WhatsappIcon />
            <Header />
            <section className="bg-[#25374f] text-white">
                <section className="py-4 px-6 max-w-92 mx-auto">
                    <div className="container mx-auto bg-slate-100 p-2 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold text-blue-900">Nossos Serviços</h2>
                    </div>
                </section>
                <div className="container mx-auto flex flex-col p-4 md:flex-row md:justify-center md:gap-32">
                    <div className="text-center p-2 order-first md:order-last md:mt-16">
                        <h1 className="font-semibold mb-2 text-4xl">Aquecimento Solar</h1>
                        <p className="text-2xl font-light text-gray-400 mb-6 md:max-w-96">Sistemas de aquecimento de água de banho e piscina com painel solar.</p>
                        <Link href="https://api.whatsapp.com/send/?phone=5511982658073&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" className="bg-transparent hover:bg-[#e5930d] outline-solid outline-white transition-all px-6 py-3 text-white font-bold rounded-full md:float-right md:mr-4">Saiba Mais</Link>
                    </div>
                    <div className="p-4 order-last md:order-first">
                        <Image src="/exemplos_5_piscina.png" alt="Exemplos placa solar" width={500} height={500}></Image>
                    </div>
                </div>
            </section>
            <section className="bg-slate-300 text-gray-700">
                <div className="container mx-auto flex flex-col p-4 md:flex-row md:justify-center md:gap-32">
                    <div className="text-center p-2 md:mt-16">
                        <h1 className="font-semibold mb-2 text-4xl">Manutenção e Suporte</h1>
                        <p className="text-2xl font-light text-gray-500 mb-6 md:max-w-96">Serviço técnico para garantir máxima eficiência.</p>
                        <Link href="https://api.whatsapp.com/send/?phone=5511982658073&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" className="bg-transparent hover:bg-[#e5930d] outline-solid outline-[#e5930d] transition-all px-6 py-3 text-gray-800 font-bold rounded-full md:float-right md:mr-4">Saiba Mais</Link>
                    </div>
                    <div className="p-4">
                        <Image src="/exemplos_3_suporte.png" alt="Exemplos placa solar" width={500} height={500}></Image>
                    </div>
                </div>
            </section>
            <section className="bg-[#25374f] text-white">
                <div className="container mx-auto flex flex-col p-4 md:flex-row md:justify-center md:gap-32">
                    <div className="text-center p-2 order-first md:order-last md:mt-16">
                        <h1 className="font-semibold mb-2 text-4xl">Consultoria Energética</h1>
                        <p className="text-2xl font-light text-gray-400 mb-6 md:max-w-96">Avaliação de consumo e viabilidade de uso do aquecimento solar.</p>
                        <Link href="https://api.whatsapp.com/send/?phone=5511982658073&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" className="bg-transparent hover:bg-[#e5930d] outline-solid outline-white transition-all px-6 py-3 text-white font-bold rounded-full md:float-right md:mr-4">Saiba Mais</Link>
                    </div>
                    <div className="p-4 order-last md:order-first">
                        <Image src="/exemplos_4_consulta.png" alt="Exemplos placa solar" width={500} height={500}></Image>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
