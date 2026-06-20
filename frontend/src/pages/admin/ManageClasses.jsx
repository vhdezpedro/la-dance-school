import { useState, useEffect } from 'react'

function ManageClasses() {
  const [classes, setClasses] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingClass, setEditingClass] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', horario: '', imagen_url: '', maestro_id: '' })

  useEffect(() => { fetchClasses() }, [])

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('http://localhost:3001/api/clases', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) setClasses(await res.json())
    } catch (err) { console.error(err) }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const url = editingClass ? `http://localhost:3001/api/clases/${editingClass.id}` : 'http://localhost:3001/api/clases'
    const method = editingClass ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        fetchClasses()
        setShowModal(false)
        setFormData({ nombre: '', descripcion: '', horario: '', imagen_url: '', maestro_id: '' })
        setEditingClass(null)
      }
    } catch (err) { console.error(err) }
  }

  const handleEdit = (cls) => {
    setEditingClass(cls)
    setFormData(cls)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta clase?')) return
    try {
      const token = localStorage.getItem('token')
      await fetch(`http://localhost:3001/api/clases/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchClasses()
    } catch (err) { console.error(err) }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Clases</h2>
        <button
          onClick={() => { setEditingClass(null); setFormData({ nombre: '', descripcion: '', horario: '', imagen_url: '', maestro_id: '' }); setShowModal(true) }}
          className="bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors"
        >
          <i className="fa-solid fa-plus mr-2"></i>Nueva Clase
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Horario</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classes.map((cls) => (
              <tr key={cls.id}>
                <td className="px-6 py-4">{cls.nombre}</td>
                <td className="px-6 py-4">{cls.horario}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleEdit(cls)} className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button onClick={() => handleDelete(cls.id)} className="text-red-600 hover:text-red-800">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">{editingClass ? 'Editar Clase' : 'Nueva Clase'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              <textarea placeholder="Descripción" value={formData.descripcion} onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })} className="w-full px-4 py-2 border rounded-lg h-24" />
              <input type="text" placeholder="Horario" value={formData.horario} onChange={(e) => setFormData({ ...formData, horario: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="URL de imagen" value={formData.imagen_url} onChange={(e) => setFormData({ ...formData, imagen_url: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
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

export default ManageClasses
