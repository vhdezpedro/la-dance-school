import { useState, useEffect } from 'react'

function ManageImages() {
  const [images, setImages] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editingImage, setEditingImage] = useState(null)
  const [formData, setFormData] = useState({ titulo: '', url: '', tipo: 'galeria' })

  useEffect(() => { fetchImages() }, [])

  const fetchImages = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('http://localhost:3001/api/imagenes', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) setImages(await res.json())
    } catch (err) { console.error(err) }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const url = editingImage
      ? `http://localhost:3001/api/imagenes/${editingImage.id}`
      : 'http://localhost:3001/api/imagenes'
    const method = editingImage ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        fetchImages()
        setShowModal(false)
        setFormData({ titulo: '', url: '', tipo: 'galeria' })
        setEditingImage(null)
      }
    } catch (err) { console.error(err) }
  }

  const handleEdit = (img) => {
    setEditingImage(img)
    setFormData(img)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta imagen?')) return
    try {
      const token = localStorage.getItem('token')
      await fetch(`http://localhost:3001/api/imagenes/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchImages()
    } catch (err) { console.error(err) }
  }

  const tipoLabels = { galeria: 'Galería', hero: 'Hero', about: 'Acerca de' }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Imágenes</h2>
        <button
          onClick={() => { setEditingImage(null); setFormData({ titulo: '', url: '', tipo: 'galeria' }); setShowModal(true) }}
          className="bg-red-950 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors"
        >
          <i className="fa-solid fa-plus mr-2"></i>Nueva Imagen
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img className="w-full h-48 object-cover" src={img.url} alt={img.titulo} />
            <div className="p-4">
              <h3 className="font-semibold">{img.titulo}</h3>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {tipoLabels[img.tipo] || img.tipo}
              </span>
              <div className="flex gap-2 mt-3">
                <button onClick={() => handleEdit(img)} className="text-blue-600 hover:text-blue-800 text-sm">
                  <i className="fa-solid fa-pen"></i> Editar
                </button>
                <button onClick={() => handleDelete(img.id)} className="text-red-600 hover:text-red-800 text-sm">
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
            <h3 className="text-xl font-bold mb-4">{editingImage ? 'Editar Imagen' : 'Nueva Imagen'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Título" value={formData.titulo} onChange={(e) => setFormData({ ...formData, titulo: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              <input type="text" placeholder="URL de la imagen" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} className="w-full px-4 py-2 border rounded-lg" required />
              <select value={formData.tipo} onChange={(e) => setFormData({ ...formData, tipo: e.target.value })} className="w-full px-4 py-2 border rounded-lg">
                <option value="galeria">Galería</option>
                <option value="hero">Hero</option>
                <option value="about">Acerca de</option>
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

export default ManageImages
