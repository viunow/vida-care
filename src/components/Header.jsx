import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import logo from '../../public/logo/VitaLar.svg';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-primary-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-fit">
          {/* Logo */}
          <div
            className="flex items-center  hover:cursor-pointer"
            onClick={() => scrollToTop()}
          >
            <Image
              src={logo}
              alt="Logo VitaLar"
              width={120}
              height={120}
              quality={100}
              className="hidden lg:block"
            />
            <Image
              src={logo}
              alt="Logo VitaLar"
              width={100}
              height={120}
              quality={100}
              className="block lg:hidden"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#beneficios"
              className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
            >
              Benefícios
            </a>
            <a
              href="#contato"
              className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contato"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-all shadow-glow hover:shadow-glow-lg transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-500" />
            ) : (
              <Menu className="w-6 h-6 text-primary-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-100 bg-white">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#inicio"
                className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
              >
                Serviços
              </a>
              <a
                href="#beneficios"
                className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
              >
                Benefícios
              </a>
              <a
                href="#contato"
                className="text-primary-700 hover:text-primary-500 transition-colors font-medium"
              >
                Contato
              </a>
              <a
                href="#contato"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg text-center hover:bg-primary-600 transition-all"
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
