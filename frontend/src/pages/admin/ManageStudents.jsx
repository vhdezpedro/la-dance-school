import { useState, useEffect } from 'react'

function ManageStudents() {
  const [students, setStudents] = useState([])
  const [classes, setClasses] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', clase_id: '' })

  useEffect(() => {
    fetchStudents()
    fetchClasses()
  }, [])

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('http://localhost:3001/api/alumnos', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) setStudents(await res.json())
    } catch (err) { console.error(err) }
  }

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
    const url = editingStudent
      ? `http://localhost:3001/api/alumnos/${editingStudent.id}`
      : 'http://localhost:3001/api/alumnos'
    const method = editingStudent ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        fetchStudents()
        setShowModal(false)
        setFormData({ nombre: '', email: '', telefono: '', clase_id: '' })
        setEditingStudent(null)
      }
    } catch (err) { console.error(err) }
  }

  const handleEdit = (student) => {
    setEditingStudent(student)
    setFormData(student)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este alumno?')) return
    try {
      const token = localStorage.getItem('token')
      await fetch(`http://localhost:3001/api/alumnos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchStudents()
    } catch (err) { console.error(err) }
  }

  const getClassName = (id) => {
    const cls = classes.find((c) => c.id === id)
    return cls ? cls.nombre : 'Sin clase'
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Alumnos</h2>
        <button
          onClick={() => {
            setEditingStudent(null)
            setFormData({ nombre: '', email: '', telefono: '', clase_id: '' })
            setShowModal(true)
          }}
          className="bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors"
        >
          <i className="fa-solid fa-plus mr-2"></i>Nuevo Alumno
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teléfono</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clase</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4">{student.nombre}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.telefono}</td>
                <td className="px-6 py-4">{getClassName(student.clase_id)}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleEdit(student)} className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-800">
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
            <h3 className="text-xl font-bold mb-4">{editingStudent ? 'Editar Alumno' : 'Nuevo Alumno'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="Teléfono" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
              <select value={formData.clase_id} onChange={(e) => setFormData({ ...formData, clase_id: e.target.value })} className="w-full px-4 py-2 border rounded-lg">
                <option value="">Seleccionar clase</option>
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>{cls.nombre}</option>
                ))}
              </select>
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

export default ManageStudents
