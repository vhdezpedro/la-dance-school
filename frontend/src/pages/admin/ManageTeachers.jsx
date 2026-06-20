import { useState, useEffect } from 'react'

function ManageTeachers() {
  const [teachers, setTeachers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingTeacher, setEditingTeacher] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', especialidad: '', bio: '', foto_url: '', instagram: '', tiktok: '' })

  useEffect(() => { fetchTeachers() }, [])

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('http://localhost:3001/api/maestros', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) setTeachers(await res.json())
    } catch (err) { console.error(err) }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const url = editingTeacher ? `http://localhost:3001/api/maestros/${editingTeacher.id}` : 'http://localhost:3001/api/maestros'
    const method = editingTeacher ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        fetchTeachers()
        setShowModal(false)
        setFormData({ nombre: '', especialidad: '', bio: '', foto_url: '', instagram: '', tiktok: '' })
        setEditingTeacher(null)
      }
    } catch (err) { console.error(err) }
  }

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher)
    setFormData(teacher)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este maestro?')) return
    try {
      const token = localStorage.getItem('token')
      await fetch(`http://localhost:3001/api/maestros/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchTeachers()
    } catch (err) { console.error(err) }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Maestros</h2>
        <button
          onClick={() => { setEditingTeacher(null); setFormData({ nombre: '', especialidad: '', bio: '', foto_url: '', instagram: '', tiktok: '' }); setShowModal(true) }}
          className="bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors"
        >
          <i className="fa-solid fa-plus mr-2"></i>Nuevo Maestro
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {teacher.foto_url && (
              <img className="w-full h-48 object-cover" src={teacher.foto_url} alt={teacher.nombre} />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg">{teacher.nombre}</h3>
              <p className="text-gray-500 text-sm">{teacher.especialidad}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => handleEdit(teacher)} className="text-blue-600 hover:text-blue-800">
                  <i className="fa-solid fa-pen"></i> Editar
                </button>
                <button onClick={() => handleDelete(teacher.id)} className="text-red-600 hover:text-red-800">
                  <i className="fa-solid fa-trash"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">{editingTeacher ? 'Editar Maestro' : 'Nuevo Maestro'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="Especialidad" value={formData.especialidad} onChange={(e) => setFormData({ ...formData, especialidad: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <textarea placeholder="Biografía" value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })} className="w-full px-4 py-2 border rounded-lg h-24" />
              <input type="text" placeholder="URL de foto" value={formData.foto_url} onChange={(e) => setFormData({ ...formData, foto_url: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Instagram" value={formData.instagram} onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="TikTok" value={formData.tiktok} onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-red-950 text-white rounded-lg hover:bg-red-900">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageTeachers
