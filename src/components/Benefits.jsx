import React from "react";
import { Home, Shield, Clock, Award, Star } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

export const Benefits = () => {
  const isVisible = useScrollAnimation();

  const beneficios = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Conforto do Lar",
      description: "Tratamento no ambiente familiar e acolhedor",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Menor Risco de Infecção",
      description: "Reduz exposição a infecções hospitalares",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento 24h",
      description: "Cuidados disponíveis quando necessário",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualidade Comprovada",
      description: "Profissionais altamente qualificados",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="beneficios-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["beneficios-header"]
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
            Benefícios do Home Care
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Descubra as vantagens de escolher o atendimento domiciliar para você
            ou seu familiar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              id={`beneficio-${index}`}
              data-animate
              className={`text-center p-6 rounded-xl border border-primary-100 hover:border-primary-300 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-glow ${
                isVisible[`beneficio-${index}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-glow">
                {beneficio.icon}
              </div>
              <h3 className="text-lg font-bold text-primary-700 mb-2">
                {beneficio.title}
              </h3>
              <p className="text-primary-600 text-sm">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div
          id="depoimentos"
          data-animate
          className={`mt-20 transition-all duration-1000 ${
            isVisible["depoimentos"]
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-primary-800 text-center mb-12">
            O que nossos clientes dizem
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "O atendimento foi excepcional. Minha mãe se sentiu muito mais confortável em casa.",
                rating: 5,
              },
              {
                name: "João Santos",
                text: "Profissionais muito dedicados e carinhosos. Recomendo para todos.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                text: "Serviço de qualidade com muito amor e atenção. Estamos muito satisfeitos.",
                rating: 5,
              },
            ].map((depoimento, index) => (
              <div
                key={index}
                className="bg-primary-50 p-6 rounded-xl shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-primary-700 mb-4 italic">
                  &quot;{depoimento.text}&quot;
                </p>
                <p className="font-semibold text-primary-800">
                  {depoimento.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
