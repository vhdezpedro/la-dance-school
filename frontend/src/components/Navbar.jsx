import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'inicio', href: '/' },
    { label: 'acerca', href: '/#about' },
    { label: 'clases', href: '/#classes' },
    { label: 'equipo', href: '/#team' },
    { label: 'galería', href: '/#gallery' },
    { label: 'ubicación', href: '/#location' },
  ]

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-10 py-2 md:py-3.5 before:content-[''] before:absolute before:inset-0 before:bg-[#858386] before:backdrop-blur-[2px] before:-z-[1] before:duration-500 before:bg-opacity-0">
        <div className="flex items-center justify-between mx-auto text-sm px-7 md:text-lg">
          <Link to="/" className="h-6 md:h-[32px] flex items-center">
            <img
              className="h-8 pb-2 md:h-12 mr-2"
              src="/src/assets/img/home/LADanceSchool-header.png"
              alt="logo"
            />
            <span className="self-center">dance school</span>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center justify-center h-6 md:h-10 bg-transparent border-none w-11 gap-[4px]"
          >
            <span className="h-[1px] md:h-0.5 w-5 md:w-7 bg-black"></span>
            <span className="h-[1px] md:h-0.5 w-5 md:w-7 bg-black"></span>
            <span className="h-[1px] md:h-0.5 w-5 md:w-7 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[100] bg-[#858386] transition-all duration-500 ${
          menuOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed w-[160px] md:w-[280px] top-0 left-full h-full z-[101] bg-white pb-10 transition-all duration-500 flex flex-col ${
          menuOpen ? '-translate-x-full' : ''
        }`}
      >
        <div className="p-2 border-b border-black md:p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="relative block w-6 h-6 md:w-10 md:h-10 bg-transparent border-none rounded-[50%] transition-colors duration-700 hover:bg-red-950 before:content-[''] before:absolute before:h-[1px] before:w-3.5 md:before:h-[2px] md:before:w-7 before:inset-0 before:m-auto before:bg-black before:rotate-45 after:content-[''] after:absolute after:h-[1px] after:w-3.5 md:after:h-[2px] md:after:w-7 after:inset-0 after:m-auto after:bg-black after:-rotate-45 hover:before:bg-white hover:after:bg-white"
          ></button>
        </div>
        <nav className="overflow-y-auto">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-black uppercase font-[Saira] text-xl md:text-2xl block p-2 md:px-4 relative transition-colors duration-500 before:content-[''] before:absolute before:inset-0 before:-z-[1] before:bg-red-950 before:w-0 before:transition-all before:duration-500 hover:before:w-full active:before:w-full hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="font-medium border-t border-black text-black uppercase font-[Saira] text-xl md:text-2xl block p-2 md:px-4 relative transition-colors duration-500 before:content-[''] before:absolute before:inset-0 before:-z-[1] before:bg-red-950 before:w-0 before:transition-all before:duration-500 hover:before:w-full active:before:w-full hover:text-white">
          <Link to="/lorenita-andrade" onClick={() => setMenuOpen(false)}>
            Conoce a <br />
            <span className="text-sm md:text-xl">Lorenita Andrade</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
