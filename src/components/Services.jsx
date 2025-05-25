import React from "react";
import { Activity, Users, Heart, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

export const Services = () => {
  const isVisible = useScrollAnimation();

  const servicos = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Atendimento de Enfermagem",
      description:
        "Profissionais qualificados para administração de medicamentos, curativos e cuidados especializados.",
      features: [
        "Administração de medicamentos",
        "Aplicação de curativos",
        "Coleta de amostras",
        "Monitoramento vital",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cuidados com Idosos",
      description:
        "Atenção especializada para a terceira idade, garantindo segurança e bem-estar.",
      features: [
        "Acompanhamento diário",
        "Auxílio nas atividades",
        "Cuidados de higiene",
        "Companhia e carinho",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Reabilitação Domiciliar",
      description: "Fisioterapia e terapia ocupacional no conforto de casa.",
      features: [
        "Fisioterapia",
        "Terapia ocupacional",
        "Exercícios personalizados",
        "Acompanhamento médico",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="servicos-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["servicos-header"]
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de home care, adaptados às
            necessidades específicas de cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              id={`servico-${index}`}
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible[`servico-${index}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center text-white mb-6 shadow-glow">
                {servico.icon}
              </div>

              <h3 className="text-xl font-bold text-primary-700 mb-4">
                {servico.title}
              </h3>
              <p className="text-primary-600 mb-6">{servico.description}</p>

              <ul className="space-y-2">
                {servico.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-500" />
                    <span className="text-primary-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
