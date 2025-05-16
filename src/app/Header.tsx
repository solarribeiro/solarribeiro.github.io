"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        const menu = document.getElementById("mobile-menu");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    };
    return (
        <header className="bg-white sticky top-0 z-50 shadow">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <a href="index.html">
                        <Image src="./logo_transparent_cropped.png" alt="Logo" className="w-auto max-h-12"></Image>
                    </a>
                </div>

                <button id="menu-toggle" className="md:hidden focus:outline-none" onClick={() => toggleMenu()}>
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <nav id="mobile-menu"
                    className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static 
            bg-white w-full left-0 top-full shadow-md md:shadow-none md:w-auto px-4 md:px-0 pt-4 md:pt-0 z-40">
                    <Link href="/" className="block py-2 md:py-0 hover:text-slate-400">Página Inicial</Link>
                    <Link href="/about_us" className="block py-2 md:py-0 hover:text-slate-400">Sobre Nós</Link>
                    <Link href="/services" className="block py-2 md:py-0 hover:text-slate-400">Serviços</Link>
                    <Link href="/portfolio" className="block py-2 md:py-0 hover:text-slate-400">Portfolio</Link>
                    <Link href="/contact" className="block py-2 md:py-0 hover:text-slate-400">Contato</Link>
                </nav>

                <a href="https://wa.me/5511982658073?text=Vim%20pelo%20website%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento."
                    className="hidden md:inline-block bg-[#25374f] text-white px-4 py-2 rounded-full hover:bg-[#2e4665]" target="_blank"
                    rel="noopener noreferrer">
                    Pedir um Orçamento
                </a>
            </div>
        </header>
    );
}