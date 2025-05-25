import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "./useScrollAnimation";

export const Contact = () => {
  const isVisible = useScrollAnimation();

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5554999999999"; // Formato internacional sem + e sem espaços
    const message =
      "Olá! Gostaria de solicitar informações sobre os serviços de home care da VidaCare Domiciliar.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contato-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible["contato-header"]
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Estamos prontos para cuidar de você e sua família. Entre em contato
            conosco para mais informações.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Informações de Contato Centralizadas */}
          <div
            id="contato-info"
            data-animate
            className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
              isVisible["contato-info"]
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-primary-100">(54) 9 9999-9999</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">E-mail</h3>
              <p className="text-primary-100">contato@vidacare.com.br</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-primary-100">Caxias do Sul - RS</p>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div
            id="contato-horario"
            data-animate
            className={`bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center mb-12 transition-all duration-1000 ${
              isVisible["contato-horario"]
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <h3 className="font-bold text-xl mb-6">Horário de Atendimento</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-primary-100">
              <div>
                <p>
                  <strong className="text-white">Segunda a Sexta</strong>
                </p>
                <p>08:00 - 18:00</p>
              </div>
              <div>
                <p>
                  <strong className="text-white">Sábados</strong>
                </p>
                <p>08:00 - 12:00</p>
              </div>
              <div>
                <p>
                  <strong className="text-white">Emergências</strong>
                </p>
                <p>24 horas</p>
              </div>
            </div>
          </div>

          {/* Botão WhatsApp Central */}
          <div
            id="contato-whatsapp"
            data-animate
            className={`text-center transition-all duration-1000 ${
              isVisible["contato-whatsapp"]
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Fale Conosco Agora</h3>
              <p className="text-primary-100 mb-8 max-w-md mx-auto">
                Clique no botão abaixo para conversar diretamente conosco via
                WhatsApp e solicitar seu orçamento.
              </p>

              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-4 rounded-xl font-semibold lg:text-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                Conversar no WhatsApp
              </button>

              <p className="text-sm text-primary-200 mt-4">
                Resposta rápida e atendimento personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
