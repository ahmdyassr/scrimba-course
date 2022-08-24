import React, {useState} from 'react';

export default function Playground() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmedPassword: '',
    isJoined: true
  })

  const handleChange = function(e) {
    let {name, value, checked} = e.target;

    setFormData( (prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === 'isJoined' ? checked : value
      }
    })
  }

  const handleSubmit = function(e) {
    e.preventDefault();
    
    if (formData.password !== formData.confirmedPassword) {
      return console.log('New passoword doesn\'t match')
    }

    if (formData.isJoined === true) {
      console.log('Thanks for joining the newsletter!')
    }

    console.log('Form submitted successfully!')
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input name='email' type="email" placeholder='Email Address' value={formData.email.value} onChange={handleChange} />
        <input name='password' type="password" placeholder='Password' value={formData.password.value} onChange={handleChange} />
        <input name='confirmedPassword' type="password" placeholder='Confirm Password'  value={formData.confirmedPassword.value} onChange={handleChange} />

        <input name='isJoined' id="newsletter" type="checkbox" checked={formData.isJoined} onChange={handleChange}/>
        <label htmlFor="newsletter">I want to join the newsletter</label>

        <button>Sign Up</button>
      </form>
    </div>
  );
}