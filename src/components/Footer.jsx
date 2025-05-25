import React from "react";
import { Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary-700 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div
              className="flex items-center space-x-2 mb-4 hover:cursor-pointer"
              onClick={() => scrollToTop()}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VidaCare</h3>
                <p className="text-sm text-primary-300">Domiciliar</p>
              </div>
            </div>
            <p className="text-primary-300 mb-4">
              Cuidados de saúde domiciliares com amor, dedicação e
              profissionalismo.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a
                href="#inicio"
                className="block text-primary-300 hover:text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block text-primary-300 hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="block text-primary-300 hover:text-white transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="block text-primary-300 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-primary-300">
              <p>(54) 9 9999-9999</p>
              <p>contato@vidacare.com.br</p>
              <p>Caxias do Sul - RS</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
          <p>
            &copy; {new Date().getFullYear()} VidaCare Domiciliar. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
