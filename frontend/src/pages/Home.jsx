import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import { Scrollbar, Grid } from "swiper/modules";

const imageModules = import.meta.glob(
  "/src/assets/img/gallery/*.{jpeg,jpg,png,webp}",
  { eager: true, import: "default" },
);

function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const classes = [
    {
      name: "ritmos latinos",
      image: "/src/assets/img/dance/salsa.png",
      link: "ritmos-latinos",
    },
    {
      name: "urbano - k-pop",
      image: "/src/assets/img/dance/hip-hop.png",
      link: "urbano-kpop",
    },
    { name: "kids", image: "/src/assets/img/dance/kids.png", link: "kids" },
    {
      name: "yoga - pilates",
      image: "/src/assets/img/dance/yoga.png",
      link: "yoga-pilates",
    },
    {
      name: "telas aéreas",
      image: "/src/assets/img/dance/telas-aereas.png",
      link: "telas-aereas",
    },
    {
      name: "pole dance - heels",
      image: "/src/assets/img/dance/pole-dance.png",
      link: "poledance-heels",
    },
  ];

  const team = [
    {
      name: "dayane tannos",
      role: "instructora de pilates",
      image: "/src/assets/img/team/dayane-tannos.jpeg",
      instagram: "https://www.instagram.com/dayanrokus/",
    },
    {
      name: "frida martinez",
      role: "instructora de yoga",
      image: "/src/assets/img/team/frida-martinez.jpeg",
      instagram: "#",
    },
    {
      name: "jane doe",
      role: "hip-hop instructor",
      image: "/src/assets/img/team/3.jpg",
      instagram: "#",
    },
  ];

  const gallery = Object.keys(imageModules)
    .sort((a, b) => {
      const numA = parseInt(a.match(/gallery-(\d+)/)?.[1] || 0);
      const numB = parseInt(b.match(/gallery-(\d+)/)?.[1] || 0);
      return numA - numB;
    })
    .map((key) => imageModules[key]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <div className="relative py-20 md:h-275" id="hero">
        <div className="absolute w-100 md:w-150 h-100 md:h-150 bg-[#b2b893] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px] opacity-40 rounded-[50%]"></div>
        <div className="h-full mx-auto px-7">
          <img
            className="block w-auto h-full mx-auto scale-110"
            src="/src/assets/img/home/hero-lorenita.png"
            alt="img"
          />
          <div className="absolute w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-225 px-4">
            <h1 className="text-6xl md:text-7xl font-[Saira] text-red-950 capitalize font-semibold leading-[1.1]">
              master your <br />
              moves
            </h1>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-10" id="about">
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 px-7 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-100 relative mx-auto before:content-[''] before:absolute before:inset-0 md:before:border-25 before:border-20 before:border-red-950 before:rounded-lg before:z-[-1]">
              <img
                className="relative -top-9 scale-112"
                src="/src/assets/img/home/about.png"
                alt="about img"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-left mb-7">
              <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
                nuestro estudio de baile
              </h2>
            </div>
            <div>
              <p className="text-justify">
                En{" "}
                <span className="font-bold uppercase font-[Saira]">
                  LA Dance School – Estudio Fitness
                </span>{" "}
                somos un espacio integral de formación artística y física
                dedicando a brindar experiencias de aprendizaje de alto nivel.
                Nos enfocamos en ofrecer clases estructuradas, impartidas por
                maestros profesionales y certificados, en instalaciones
                adecuadas que favorecen el desarrollo técnico y creativo.
              </p>
              <p className="text-justify">
                <br />
                <span className="font-bold uppercase font-[Saira]">
                  Nuestra misión
                </span>{" "}
                es acompañar a cada alumno en su proceso de crecimiento personal
                y artístico fomentando un ambiente seguro, libre y profesional
                donde puedan explorar su potencial, fortalecer su disciplina y
                conectar con su identidad a través del movimiento.
              </p>
              <p className="text-justify">
                <br />
                <span className="font-bold uppercase font-[Saira]">
                  Nuestra visión,
                </span>{" "}
                ser una escuela referente a nivel local, nacional e
                internacional en la formación de artistas y profesionales del
                movimiento, reconocida por su calidad académica, su enfoque
                humano y su impacto en la comunidad. <br /> Aspiramos a
                construir una comunidad sólida que impulse el talento, genere
                oportunidades y eleve el estándar de la enseñanza artística,
                formando alumnos que no solo dominen la técnica, sino que
                también desarrollen confianza, identidad y propósito en su
                camino profesional y personal
              </p>
            </div>
            <div className="text-red-950 font-[Saira] mt-6">
              <span className="text-5xl md:text-6xl font-bold leading-[1.2]">
                10+
              </span>
              <p className="text-lg font-semibold uppercase md:text-xl">
                años de experiencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-10" id="classes">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl capitalize leading-[1.1] font-[Saira]">
              elige tu estilo de baile
            </h2>
          </div>
          <Swiper
            spaceBetween={30}
            modules={[Scrollbar]}
            scrollbar={{
              draggable: true,
              el: ".classes-scrollbar",
              horizontalClass: "swiper-scrollbar-horizontal",
            }}
            breakpoints={{
              650: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
            }}
          >
            {classes.map((cls) => (
              <SwiperSlide key={cls.link}>
                <div className="transition-transform duration-500 rounded-2xl bg-red-950 p-7 hover:scale-105">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="block mx-auto h-65"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center text-white capitalize">
                    {cls.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="classes-scrollbar mt-6 mx-auto"></div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10" id="team">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              conoce a los instructores
            </h2>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            {team.map((member) => (
              <div key={member.name} className="flex-1">
                <div className="relative overflow-hidden group">
                  <img
                    className="transition-all duration-500 origin-top group-hover:scale-110"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute w-auto p-2 text-center transition-all duration-500 translate-y-5 opacity-0 md:p-3 justify-self-center bg-red-950 bottom-7 left-7 right-7 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold text-white capitalize md:text-2xl">
                      {member.name}
                    </h3>
                    <p className="text-white capitalize">{member.role}</p>
                  </div>
                </div>
                <div className="mt-3 text-center flex justify-center items-center">
                  <div className="group">
                    <a
                      className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] mx-1 transition-colors duration-500 group-hover:bg-red-950"
                      href="#"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="text-red-950 transition-colors duration-500 group-hover:text-white"
                      />
                    </a>
                  </div>
                  <div className="group">
                    <a
                      className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] mx-1 transition-colors duration-500 group-hover:bg-red-950"
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-red-950 transition-colors duration-500 group-hover:text-white"
                      />
                    </a>
                  </div>
                  <div className="group">
                    <a
                      className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] mx-1 transition-colors duration-500 group-hover:bg-red-950"
                      href="#"
                    >
                      <FontAwesomeIcon
                        icon={faTiktok}
                        className="text-red-950 transition-colors duration-500 group-hover:text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 bg-red-950" id="gallery">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira] text-white">
              nuestra galería
            </h2>
          </div>
          <Swiper
            modules={[Scrollbar, Grid]}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{
              draggable: true,
              el: ".gallery-scrollbar",
              horizontalClass: "swiper-scrollbar-horizontal",
            }}
            breakpoints={{
              1024: { slidesPerView: 4 },
            }}
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    className="w-full h-75 object-cover transition-all duration-500 group-hover:scale-110"
                    src={img}
                    alt={`gallery ${index + 1}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black opacity-0 group-hover:opacity-70">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-3xl text-red-950"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="gallery-scrollbar mt-6 mx-auto"></div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 z-10 text-white text-3xl cursor-pointer hover:text-red-400 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <button
            className="absolute left-2 md:left-6 z-10 text-white text-2xl md:text-4xl cursor-pointer hover:text-red-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === 0 ? gallery.length - 1 : prev - 1,
              );
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <img
            src={gallery[lightboxIndex]}
            alt={`gallery ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-2 md:right-6 z-10 text-white text-2xl md:text-4xl cursor-pointer hover:text-red-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === gallery.length - 1 ? 0 : prev + 1,
              );
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {/* Location */}
      <section className="py-10" id="location">
        <div className="mx-auto px-7">
          <div className="mx-auto mb-16 text-center max-w-200">
            <h2 className="text-5xl md:text-6xl capitalize leading-[1.1] font-[Saira]">
              ubícanos
            </h2>
          </div>
          <div className="flex flex-col-reverse gap-3 md:flex-row">
            <div className="basis-2/5">
              <div className="mt-10">
                <div className="flex mt-10 md:block">
                  <i className="mt-1 mr-1 text-2xl text-red-950 fa-solid fa-map-marker-alt"></i>
                  <div>
                    <h3 className="mb-1 text-2xl font-medium capitalize">
                      dirección
                    </h3>
                    <p>
                      Av. Hornos 5 Ampliación Sta Lucia. <br />
                      Santa Lucía del camino, CP 71243. <br />
                      Oaxaca de Juárez, Oaxaca.
                    </p>
                  </div>
                </div>
                <div className="flex mt-10 md:block">
                  <i className="mt-1 mr-1 text-2xl fa-brands fa-instagram text-red-950"></i>
                  <div>
                    <h3 className="mb-1 text-2xl font-medium capitalize">
                      escríbenos
                    </h3>
                    <p>
                      <a
                        className="text-red-950 hover:font-medium hover:underline"
                        href="https://www.instagram.com/la_danceschool?igsh=a2tnZTJkcWY1dGRr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LA Dance School
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 border-2 rounded-2xl p-px border-black">
              <iframe
                className="rounded-2xl h-95 md:h-112.5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.458584349562!2d-96.69710862507334!3d17.05020698378067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723eaa7b0bcf1%3A0x52d06f7745cd3068!2sLA%20dance%20school%20-%20Estudio%20fitness!5e0!3m2!1ses-419!2suk!4v1781974473203!5m2!1ses-419!2suk"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
