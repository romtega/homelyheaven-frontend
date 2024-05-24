import React, { useState } from 'react'

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    imgUrl: [],
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  })

  const propertyTypes = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Departamento', label: 'Departamento' },
    { value: 'Propiedad Entera', label: 'Propiedad Entera' },
    { value: 'Habitación privada', label: 'Habitación privada' },
    { value: 'Habitación compartida', label: 'Habitación compartida' }
  ]

  const handleChange = (event) => {
    if (event.target.name === 'imgUrl') {
      setFormData({
        ...formData,
        imgUrl: [...event.target.files]
      })
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("PropertyForm submitted:", formData)
    /*AGREGAR QUE ESTÁ SUJETO A VALIDACIÓN*/
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Descripción de la propiedad:</h2>
      <div>
        <label htmlFor="name">Nombre de la propiedad:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
      <label htmlFor="type">Tipo:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          {propertyTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="price">Costo por noche:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="bedrooms">Dormitorios:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="bathrooms">Baños:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imgUrl">Imágenes:</label>
        <input
          type="file"
          id="imgUrl"
          name="imgUrl"
          multiple
          accept="image/*"
          onChange={handleChange}
        />
        <p>Puedes subir hasta 5 imágenes de la propiedad.</p>
      </div>
      <h2>Datos de la ubicación</h2>
      <div>
        <label htmlFor="street">Calle y número:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="state">Estado:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="postalCode">Código Postal:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          pattern="[0-9]{5}"
          required
        />
      </div>
      <div>
        <label htmlFor="country">País:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar para validación</button>
    </form>
  )
}

export default PropertyForm
