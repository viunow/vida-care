import React, { useEffect, useState } from "react";
import {
  Heart,
  Home,
  Shield,
  Users,
  Star,
  Activity,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export const HomeCareCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Cuidado Especializado",
      subtitle: "Em casa, com toda segurança",
      icon: <Heart className="w-16 h-16 text-white" />,
      bgGradient: "from-primary-400 to-secondary-300",
      img: "https://plus.unsplash.com/premium_photo-1681966589359-d3468355e1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Enfermagem 24h",
      subtitle: "Profissionais sempre disponíveis",
      icon: <Activity className="w-16 h-16 text-white" />,
      bgGradient: "from-primary-400 to-secondary-300",
      img: "https://plus.unsplash.com/premium_photo-1681966589359-d3468355e1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Carinho que Cura",
      subtitle: "Amor e atenção em cada gesto",
      icon: <Users className="w-16 h-16 text-white" />,
      bgGradient: "from-primary-400 to-secondary-300",
      img: "https://plus.unsplash.com/premium_photo-1681966589359-d3468355e1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Recuperação no Lar",
      subtitle: "Conforto que acelera a cura",
      icon: <Home className="w-16 h-16 text-white" />,
      bgGradient: "from-primary-400 to-secondary-300",
      img: "https://plus.unsplash.com/premium_photo-1681966589359-d3468355e1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Auto-play do carousel a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hidden sm:block relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full h-full bg-gradient-to-br ${slide.bgGradient} flex items-center justify-center relative overflow-hidden`}
          >
            {/* Conteúdo do Slide */}
            <div className="text-center z-10 px-2 sm:px-4 lg:px-6 w-full max-w-sm mx-auto">
              <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-glow animate-pulse-glow">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={144}
                  height={144}
                  quality={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 leading-tight">
                {slide.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-tight">
                {slide.subtitle}
              </p>
            </div>

            {/* Elementos Decorativos Flutuantes - Menores no mobile */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:-top-2 lg:-right-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white/70" />
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:-bottom-2 lg:-left-2 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Star className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white/70" />
            </div>

            {/* Padrão de Fundo Sutil */}
            <div
              className="absolute inset-0 bg-white/5"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Indicadores de Slide */}
      <div className="absolute bottom-1 sm:bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white shadow-glow scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Setas de Navegação (apenas desktop) */}
      <div className="absolute inset-y-0 left-0 hidden lg:flex items-center group-hover:opacity-100 opacity-0 transition-opacity">
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="ml-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 hidden lg:flex items-center group-hover:opacity-100 opacity-0 transition-opacity">
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="mr-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hover effect para mostrar controles */}
      <div className="absolute inset-0 group" />
    </div>
  );
};
