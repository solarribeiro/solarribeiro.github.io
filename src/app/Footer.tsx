import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Links de navegação */}
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <Link href="/" className="hover:underline">Página Inicial</Link>
          <Link href="/sobre-nos" className="hover:underline">Sobre Nós</Link>
          <Link href="/servicos" className="hover:underline">Serviços</Link>
          <Link href="/portfolio" className="hover:underline">Portfólio</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4 text-xl">
          <a href="https://api.whatsapp.com/send/?phone=5511961672352&text=Vim+pelo+website+e+gostaria+de+pedir+um+or%C3%A7amento.&type=phone_number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-300">
        &copy; 2025 Solar Ribeiro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
