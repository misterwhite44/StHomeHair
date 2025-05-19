import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/utilisateurs/login', form);
      alert(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || "Erreur de connexion");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
