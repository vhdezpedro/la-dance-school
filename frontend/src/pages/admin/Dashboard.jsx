import { useEffect, useState } from 'react'
import { useNavigate, Link, Routes, Route } from 'react-router-dom'
import ManageClasses from './ManageClasses'
import ManageTeachers from './ManageTeachers'
import ManageStudents from './ManageStudents'
import ManageImages from './ManageImages'
import logoImg from '/src/assets/img/home/LADanceSchool-header.png'

function AdminLayout() {
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (!token) {
      navigate('/admin/login')
      return
    }
    if (userData) setUser(JSON.parse(userData))
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  const menuItems = [
    { label: 'Dashboard', icon: 'fa-gauge-high', path: '/admin' },
    { label: 'Clases', icon: 'fa-graduation-cap', path: '/admin/clases' },
    { label: 'Maestros', icon: 'fa-users', path: '/admin/maestros' },
    { label: 'Alumnos', icon: 'fa-user-group', path: '/admin/alumnos' },
    { label: 'Imágenes', icon: 'fa-image', path: '/admin/imagenes' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-red-950 text-white transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 border-b border-red-900">
          <div className="flex items-center gap-3">
            <img
              className="h-10"
              src={logoImg}
              alt="logo"
            />
            {sidebarOpen && (
              <span className="font-bold font-[Saira] text-lg">Admin</span>
            )}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900 transition-colors duration-200"
                >
                  <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-red-900 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-900 transition-colors duration-200 w-full text-left"
          >
            <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
            {sidebarOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-red-950 text-xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Hola, {user?.nombre || 'Admin'}
            </span>
            <div className="w-10 h-10 bg-red-950 text-white rounded-full flex items-center justify-center font-semibold">
              {user?.nombre?.charAt(0) || 'A'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="clases" element={<ManageClasses />} />
            <Route path="maestros" element={<ManageTeachers />} />
            <Route path="alumnos" element={<ManageStudents />} />
            <Route path="imagenes" element={<ManageImages />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function DashboardHome() {
  const [stats, setStats] = useState({ clases: 0, maestros: 0, alumnos: 0 })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:3001/api/stats', {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          setStats(data)
        }
      } catch (err) {
        console.error('Error fetching stats:', err)
      }
    }
    fetchStats()
  }, [])

  const cards = [
    { label: 'Clases', value: stats.clases, icon: 'fa-graduation-cap', color: 'bg-blue-500' },
    { label: 'Maestros', value: stats.maestros, icon: 'fa-users', color: 'bg-green-500' },
    { label: 'Alumnos', value: stats.alumnos, icon: 'fa-user-group', color: 'bg-purple-500' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className={`${card.color} text-white w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
                <i className={`fa-solid ${card.icon}`}></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-3xl font-bold text-gray-800">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminLayout
