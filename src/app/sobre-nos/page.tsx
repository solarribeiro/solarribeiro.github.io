import WhatsappIcon from "../WhatsappIcon";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans text-gray-700 bg-[#f5f7fa]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #b7c9db75 1px, transparent 0)", backgroundSize: "20px 20px" }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <WhatsappIcon />
            <Header />
            <section className="py-16 px-6">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-md flex justify-center">
                    {/* <h2 className="text-3xl font-bold text-blue-900 mb-2">Sobre Nós</h2> */}
                    <div className="flex flex-col gap-20 md:flex-row">
                        <div className="text-lg md:mt-16 md:max-w-180">
                            <p className="mb-4">A <b>Solar Ribeiro</b> é uma empresa especializada em soluções sustentáveis para aquecimento de água, reconhecida por sua atuação comprometida com a inovação e a preservação ambiental. Com forte presença no mercado, a <b>Solar Ribeiro</b> destaca-se por oferecer sistemas de energia solar térmica que aliam tecnologia, eficiência e responsabilidade ecológica, garantindo alto desempenho e conforto para residências, comércios e indústrias.</p>
                            <p>Atuando em diversas regiões do Nordeste, a empresa disponibiliza um portfólio completo de produtos, como coletores solares, reservatórios térmicos e sistemas integrados de aquecimento solar. Todos os equipamentos são desenvolvidos com foco na máxima eficiência energética, durabilidade e segurança, reforçando o compromisso da Solar Ribeiro em entregar soluções confiáveis que contribuem para a economia de recursos e a valorização dos projetos de seus clientes.</p>
                        </div>
                        <div className="">
                            <Image src="/exemplos_2_placa_solar.png" alt="Exemplos placa solar" width={500} height={500}></Image>
                        </div>
                        {/* <Image src="/logo_transparent_cropped.png" className="mt-4" alt="Logo" width={400} height={400}></Image> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
