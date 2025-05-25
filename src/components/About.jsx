import React from "react";
import { Users, Heart, Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

export const About = () => {
  const isVisible = useScrollAnimation();

  return (
    <section id="sobre" className="sm:pt-20 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="sobre-content"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["sobre-content"]
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              Sobre a VidaCare Domiciliar
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Somos especialistas em home care, oferecendo assistência
              domiciliar de qualidade com foco no cuidado humanizado e no
              bem-estar do paciente e família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                O que é Home Care?
              </h3>
              <p className="text-primary-600 leading-relaxed">
                O Home Care, ou assistência domiciliar, consiste em oferecer
                cuidados médicos, de enfermagem e outros serviços de saúde no
                domicílio do paciente. Isso permite que o paciente receba
                tratamento em um ambiente familiar e confortável.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-primary-700 font-medium">
                    Ambiente Familiar
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-primary-700 font-medium">
                    Cuidado Personalizado
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-primary-700 font-medium">
                    Menor Risco
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-primary-700 font-medium">
                    Maior Conforto
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 aspect-square bg-primary-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-700">Nossa Missão</h4>
                    <p className="text-primary-600 text-sm">
                      Proporcionar cuidados de qualidade no conforto do lar
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 aspect-square bg-accent-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-700">Nossa Visão</h4>
                    <p className="text-primary-600 text-sm">
                      Ser referência em home care humanizado
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 aspect-square bg-secondary-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-700">
                      Nossos Valores
                    </h4>
                    <p className="text-primary-600 text-sm">
                      Ética, respeito, qualidade e dedicação
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
