import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo/VitaLarBranco.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary-600 text-primary-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div
              className="flex items-center  hover:cursor-pointer"
              onClick={() => scrollToTop()}
            >
              <Image
                src={logo}
                alt="Logo VitaLar"
                width={140}
                height={120}
                quality={100}
              />
            </div>
            <p className="text-secondary-200 mb-4">
              Cuidados de saúde domiciliares com amor, dedicação e
              profissionalismo.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a
                href="#inicio"
                className="block text-secondary-200 hover:text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block text-secondary-200 hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="block text-secondary-200 hover:text-white transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="block text-secondary-200 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-secondary-200">
              <p>(54) 9 9999-9999</p>
              <p>contato@vitalar.com.br</p>
              <p>Caxias do Sul - RS</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-8 pt-8 text-center text-secondary-200">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} VitaLar Home Care. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
