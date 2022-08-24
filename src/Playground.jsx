import React, {useState} from 'react'

export default function Playground() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  function handleChange(e) {
    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })  

    console.log(formData)
  }

  return (
    <form action="">
      <input type='text' name='firstName' placeholder='First Name' value={formData.firstName.value} onChange={handleChange} />
      <input type='text' name='lastName' placeholder='Second Name' value={formData.lastName.value} onChange={handleChange} />
      <input type='email' name='email' placeholder='Email Address' value={formData.email.value} onChange={handleChange} />
    </form>
  );
}