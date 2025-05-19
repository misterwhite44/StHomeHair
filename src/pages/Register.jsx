import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    mot_de_passe: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/utilisateurs/', form);
      alert('Compte créé avec succès');
      setForm({ nom: '', email: '', mot_de_passe: '' });
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Erreur lors de la création du compte');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nom"
        placeholder="Nom"
        value={form.nom}
        onChange={handleChange}
        required
      />
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
        name="mot_de_passe"
        placeholder="Mot de passe"
        value={form.mot_de_passe}
        onChange={handleChange}
        required
      />
      <button type="submit">Créer un compte</button>
    </form>
  );
};

export default Register;
