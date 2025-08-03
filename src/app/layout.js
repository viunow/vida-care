import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title:
    'VitaLar Domiciliar - Home Care em Caxias do Sul | Assistência Domiciliar',
  description:
    'Serviços de home care e assistência domiciliar humanizada em Caxias do Sul. Cuidados de enfermagem, reabilitação e cuidados com idosos no conforto do seu lar.',
  keywords:
    'home care, assistência domiciliar, cuidados domiciliares, enfermagem domiciliar, cuidados com idosos, Caxias do Sul, saúde domiciliar',
  authors: [{ name: 'VitaLar Domiciliar' }],
  creator: 'VitaLar Domiciliar',
  publisher: 'VitaLar Domiciliar',
  metadataBase: new URL('https://vitalar.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    title: 'VitaLar Domiciliar - Home Care Humanizado',
    description:
      'Assistência domiciliar de qualidade com foco no cuidado humanizado e bem-estar do paciente e família.',
    url: 'https://vitalar.com.br',
    siteName: 'VitaLar Domiciliar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VitaLar Domiciliar - Home Care',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitaLar Domiciliar - Home Care Humanizado',
    description:
      'Assistência domiciliar de qualidade com foco no cuidado humanizado.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
    yahoo: 'yahoo-verification-code-here',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <head>
        {/* Schema.org para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'VitaLar Domiciliar',
              description:
                'Serviços de home care e assistência domiciliar com foco em cuidados humanizados e qualidade de vida.',
              url: 'https://vitalar.com.br',
              telephone: '+55-54-99999-9999',
              email: 'contato@vitalar.com.br',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
                addressRegion: 'RS',
                addressLocality: 'Caxias do Sul',
                streetAddress: 'Rua das Flores, 123',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-29.1678',
                longitude: '-51.1794',
              },
              serviceType: 'Home Care Services',
              medicalSpecialty: [
                'Nursing Care',
                'Elderly Care',
                'Physical Therapy',
                'Home Health Care',
              ],
              priceRange: '$$',
              openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Serviços de Home Care',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Atendimento de Enfermagem',
                      description:
                        'Cuidados especializados de enfermagem no domicílio',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Cuidados com Idosos',
                      description:
                        'Assistência especializada para a terceira idade',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Reabilitação Domiciliar',
                      description: 'Fisioterapia e terapia ocupacional em casa',
                    },
                  },
                ],
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '50',
              },
              review: [
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Maria Silva',
                  },
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                  reviewBody:
                    'O atendimento foi excepcional. Minha mãe se sentiu muito mais confortável em casa.',
                },
              ],
            }),
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body className={`${plusJakarta.className} antialiased bg-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
