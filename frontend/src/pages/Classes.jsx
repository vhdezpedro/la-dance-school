import { useParams } from 'react-router-dom'
import salsaImg from '/src/assets/img/dance/salsa.png'
import hipHopImg from '/src/assets/img/dance/hip-hop.png'
import kidsImg from '/src/assets/img/dance/kids.png'
import yogaImg from '/src/assets/img/dance/yoga.png'
import telasAereasImg from '/src/assets/img/dance/telas-aereas.png'
import poleDanceImg from '/src/assets/img/dance/pole-dance.png'

function Classes() {
  const { section } = useParams()

  const classes = [
    {
      id: 'ritmos-latinos',
      name: 'Ritmos Latinos',
      image: salsaImg,
      schedule: 'Lunes y Miércoles 6:00 PM - 7:00 PM',
      description: 'Aprende los ritmos más vibrantes de Latinoamérica: salsa, bachata, cumbia y más.',
    },
    {
      id: 'urbano-kpop',
      name: 'Urbano - K-Pop',
      image: hipHopImg,
      schedule: 'Martes y Jueves 5:00 PM - 6:00 PM',
      description: 'Estilos urbanos y coreografías K-pop para todos los niveles.',
    },
    {
      id: 'kids',
      name: 'Kids',
      image: kidsImg,
      schedule: 'Sábados 10:00 AM - 11:00 AM',
      description: 'Clases divertidas de baile para los más pequeños de la casa.',
    },
    {
      id: 'yoga-pilates',
      name: 'Yoga - Pilates',
      image: yogaImg,
      schedule: 'Lunes a Viernes 7:00 AM - 8:00 AM',
      description: 'Fortalece tu cuerpo y mente con nuestras clases de yoga y pilates.',
    },
    {
      id: 'telas-aereas',
      name: 'Telas Aéreas',
      image: telasAereasImg,
      schedule: 'Martes y Jueves 6:00 PM - 7:00 PM',
      description: 'Arte aéreo con telas. Fortalece, estira y diviértete volando.',
    },
    {
      id: 'poledance-heels',
      name: 'Pole Dance - Heels',
      image: poleDanceImg,
      schedule: 'Miércoles y Viernes 6:00 PM - 7:00 PM',
      description: 'Pole dance y baile con tacones. Expresa tu sensualidad y fuerza.',
    },
  ]

  return (
    <div className="pt-24 pb-10">
      <div className="mx-auto px-7">
        <div className="mx-auto mb-16 text-center max-w-[800px]">
          <h1 className="text-6xl capitalize leading-[1.1] font-[Saira]">
            Clases y horarios
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <div
              key={cls.id}
              id={cls.id}
              className={`rounded-2xl bg-red-950 p-7 transition-transform duration-500 hover:scale-105 ${
                section === cls.id ? 'ring-4 ring-white' : ''
              }`}
            >
              <img
                className="block mx-auto h-[260px]"
                src={cls.image}
                alt={cls.name}
              />
              <h3 className="mt-4 text-2xl font-semibold text-center text-white capitalize font-[Saira]">
                {cls.name}
              </h3>
              <p className="mt-2 text-center text-white/80">{cls.schedule}</p>
              <p className="mt-3 text-center text-white/90">{cls.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a className="text-red-950 hover:font-medium hover:underline" href="/">
            Regresar a la página principal
          </a>
        </div>
      </div>
    </div>
  )
}

export default Classes
