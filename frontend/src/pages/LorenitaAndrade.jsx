import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUsers,
  faStar,
  faAward,
  faCertificate,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import lorenitaImg from "/src/assets/img/lorenita-andrade/lorenita-andrade.png";

function LorenitaAndrade() {
  const timeline = [
    {
      year: "2010",
      title: "Inicios en la danza",
      description:
        "Lorenita comienza su formación en danza clásica y contemporánea, descubriendo su pasión por la enseñanza desde sus primeros años como bailarina profesional.",
    },
    {
      year: "2015",
      title: "Certificaciones internacionales",
      description:
        "Obtiene certificaciones en diversas disciplinas: pole dance, telas aéreas y yoga. Viaja a internacionalmente para perfeccionar su técnica con reconocidos maestros.",
    },
    {
      year: "2018",
      title: "Apertura de LA Dance School",
      description:
        "Cumple su sueño de abrir las puertas de su propio estudio de baile, creando un espacio donde todos puedan expresarse a través del movimiento.",
    },
    {
      year: "2022",
      title: "Expansión de disciplinas",
      description:
        "Amplía la oferta del estudio incorporando clases de pilates, fitbox y programación para niños, convirtiéndose en un centro integral de wellness y danza.",
    },
    {
      year: "2024",
      title: "Reconocimiento comunitario",
      description:
        "LA Dance School se consolida como referente en la comunidad, con más de 200 alumnas activas y múltiples reconocimientos por su labor formativa.",
    },
  ];

  const philosophy = [
    {
      icon: faHeart,
      title: "Pasión",
      description:
        "Cada clase es una oportunidad para transmitir el amor por la danza y el movimiento.",
    },
    {
      icon: faUsers,
      title: "Comunidad",
      description:
        "Creemos en la fuerza del grupo. Cada alumna es parte de una gran familia que se apoya y crece junto.",
    },
    {
      icon: faStar,
      title: "Disciplina",
      description:
        "La constancia y el compromiso son la base del éxito. Enseñamos valores que van más allá del baile.",
    },
  ];

  const achievements = [
    {
      icon: faAward,
      title: "Más de 200 alumnas",
      description: "Formando bailarinas y personas comprometidas desde 2018.",
    },
    {
      icon: faCertificate,
      title: "Certificaciones",
      description:
        "Instructora certificada en pole dance, telas aéreas, yoga y pilates.",
    },
    {
      icon: faMedal,
      title: "6 disciplinas",
      description:
        "Ritmos latinos, urbano, kids, yoga-pilates, telas aéreas y pole dance.",
    },
  ];

  return (
    <div className="md:pt-10 pb-10">
      {/* Hero */}
      <section className="relative py-8 md:py-24">
        <div className="mx-auto px-7">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
            <div className="relative w-64 h-64 md:w-100 md:h-100 shrink-0 before:content-[''] before:absolute before:inset-0 before:border-20 before:border-red-950 before:rounded-lg before:z-[-1]">
              <img
                className="relative w-full h-full object-cover rounded-lg -top-4 -left-4"
                src={lorenitaImg}
                alt="Lorenita Andrade"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl capitalize leading-[1.1] font-[Saira]">
                Lorenita Andrade
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-red-950 font-semibold font-[Saira] capitalize">
                Directora y fundadora de LA Dance School
              </p>
              <p className="mt-4 md:text-lg text-gray-600 max-w-md">
                "El baile no es solo movimiento, es expresión de lo que llevamos
                dentro."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-10">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              mi historia
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 max-w-5xl">
            <div className="relative">
              <div className="max-w-[320px] mx-auto before:content-[''] before:absolute before:inset-0 before:border-20 before:border-red-950 before:rounded-lg before:z-[-1]">
                <img
                  className="relative -top-4 -left-4 w-full rounded-lg object-cover h-80"
                  src={lorenitaImg}
                  alt="Lorenita Andrade"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-justify">
                Desde muy pequeña, Lorenita sintió una conexión profunda con la
                danza. A los 15 años comenzó su formación profesional en danza
                clásica y contemporánea, descubriendo que su verdadera pasión no
                era solo bailar, sino enseñar.
              </p>
              <p className="mb-4 text-justify">
                A lo largo de su carrera, viajó por diversos países
                perfeccionando su técnica y obteniendo certificaciones en pole
                dance, telas aéreas, yoga y pilates. Cada disciplina le enseñó
                algo nuevo sobre el cuerpo y la mente.
              </p>
              <p className="text-justify">
                En 2018, cumplió su sueño de abrir LA Dance School, un espacio
                donde cualquier persona, sin importar su edad o nivel, pueda
                encontrar su ritmo y expresarse libremente. Hoy, con más de 200
                alumnas activas, el estudio se ha convertido en una comunidad
                unida por el amor al movimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria - Línea de Tiempo */}
      <section className="py-10 bg-red-950">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira] text-white">
              mi trayectoria
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Línea vertical central */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 h-full bg-white/30" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Contenido */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-3xl font-bold text-white font-[Saira]">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white font-[Saira]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/80">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-red-950 z-10 mt-1" />

                {/* Espacio opuesto */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-10">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              en sus propias palabras
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Lorenita Andrade - LA Dance School"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-10">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              mi filosofía
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-red-950 p-7 text-center transition-transform duration-500 hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-4xl text-white mb-4"
                />
                <h3 className="text-xl font-semibold text-white font-[Saira] capitalize">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-10">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              logros
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-red-950 p-7 text-center transition-transform duration-500 hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-4xl text-red-950 mb-4"
                />
                <h3 className="text-xl font-semibold font-[Saira] capitalize">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="mx-auto px-7 text-center">
          <a
            href="/clases"
            className="inline-block rounded-2xl bg-red-950 px-8 py-4 text-white text-lg font-semibold font-[Saira] capitalize transition-transform duration-500 hover:scale-105"
          >
            Conoce nuestras clases
          </a>
        </div>
      </section>
    </div>
  );
}

export default LorenitaAndrade;
