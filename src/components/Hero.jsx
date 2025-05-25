import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HomeCareCarousel } from "./HomeCareCarousel";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Cuidado", "Carinho", "Atenção", "Amor"];

  useEffect(() => {
    const typewriterEffect = () => {
      const text = texts[textIndex];
      let charIndex = 0;

      const timer = setInterval(() => {
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
            setCurrentText("");
          }, 2000);
        }
      }, 150);

      return timer;
    };

    const timer = typewriterEffect();
    return () => clearInterval(timer);
  }, [textIndex]);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 leading-tight">
                <span className="text-primary-600">Home Care com</span>
                <br />
                <span className="text-secondary-500 min-h-[1.2em] inline-block">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-700 max-w-xl">
                VidaCare, uma assistência domiciliar humanizada que coloca o
                bem-estar do paciente e da família em primeiro lugar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-secondary-400 text-white px-8 py-4 rounded-lg hover:bg-secondary-500 transition-all shadow-glow hover:shadow-glow-lg transform text-center font-semibold"
              >
                Solicitar Orçamento
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg hover:bg-primary-500 hover:text-white transition-all text-center font-semibold"
              >
                Conheça os Serviços
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-row gap-28 flex-wrap items-center pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                  24h
                </div>
                <div className="text-sm text-primary-700">Atendimento</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                  100%
                </div>
                <div className="text-sm text-primary-700">Humanizado</div>
              </div>
            </div>
          </div>

          {/* Carousel de Imagens */}
          <div className="relative animate-slide-up">
            <HomeCareCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
