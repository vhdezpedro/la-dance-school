import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, EffectFade } from "swiper/modules";

function Home() {
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

  const gallery = Array.from(
    { length: 8 },
    (_, i) => `/src/assets/img/gallery/gallery-${i + 1}.jpeg`,
  );

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
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 px-7">
          <div className="order-2 md:order-1">
            <div className="max-w-[320px] relative mx-auto before:content-[''] before:absolute before:inset-0 before:border-20 before:border-red-950 before:rounded-lg before:z-[-1]">
              <img
                className="relative -top-7.5 scale-110"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-justify">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="text-justify">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              navigation={true}
              // scrollbar={{ draggable: true }}
              // breakpoints={{
              //   650: { slidesPerView: 2 },
              //   1050: { slidesPerView: 3 },
              // }}
            >
              {classes.map((cls) => (
                <SwiperSlide key={cls.link}>
                  {/* <Link
                    to={`/classes#${cls.link}`}
                    className="transition-transform duration-500 rounded-2xl bg-red-950 p-7 hover:scale-105"
                  > */}
                  <img
                    // className="block mx-auto h-65"
                    src={cls.image}
                    alt={cls.name}
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center text-white capitalize">
                    {cls.name}
                  </h3>
                  {/* </Link> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
                <div className="mt-3 text-center">
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] text-red-950 transition-colors duration-500 mx-1 hover:text-white hover:bg-red-950"
                    href="#"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] text-red-950 transition-colors duration-500 mx-1 hover:text-white hover:bg-red-950"
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-[50%] text-red-950 transition-colors duration-500 mx-1 hover:text-white hover:bg-red-950"
                    href="#"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <div key={index} className="relative overflow-hidden group">
                <img
                  className="w-full h-100 object-cover transition-all duration-500 group-hover:scale-110"
                  src={img}
                  alt={`gallery ${index + 1}`}
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 bg-black opacity-0 group-hover:opacity-70">
                  <i className="text-3xl text-red-950 fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.4570013827133!2d-96.6971084253802!3d17.0502845124299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7231f319aba6d%3A0x4d1b6bcdc9308da8!2sBooty%20GYM!5e0!3m2!1ses-419!2smx!4v1765925755387!5m2!1ses-419!2smx"
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
