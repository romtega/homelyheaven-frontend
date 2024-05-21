import React, { useState } from "react"

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "customer", // Valor default que cambia hasta que agregan una vivienda
    phone: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

/*   const handlePhoneValidation = (value) => {
    const regex = /^\d{10}$/ // para que sean los 10 dígitos
    if (!regex.test(value)) {
      return "El teléfono debe tener 10 dígitos"
    }
    return undefined
  }

  const handleEmailValidation = (value) => {
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(value)) {
      return "Formato inválido"
    }
    return undefined
  } */

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted:", formData) // para prueba
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          // validationMessage={handlePhoneValidation(formData.phone)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          // validationMessage={handleEmailValidation(formData.email)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  ) 
}

export default UserForm
