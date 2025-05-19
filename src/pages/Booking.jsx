import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Booking() {
  const [form, setForm] = useState({
    utilisateur_id: '',
    coiffeur_id: '',
    service_id: '',
    creneau_id: ''
  });

  const [utilisateurs, setUtilisateurs] = useState([]);
  const [coiffeurs, setCoiffeurs] = useState([]);
  const [services, setServices] = useState([]);
  const [creneaux, setCreneaux] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/utilisateurs').then(res => setUtilisateurs(res.data));
    axios.get('http://localhost:5000/coiffeurs').then(res => setCoiffeurs(res.data));
    axios.get('http://localhost:5000/services').then(res => setServices(res.data));
    axios.get('http://localhost:5000/creneaux').then(res => setCreneaux(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/reservations', form);
      alert('Réservation enregistrée');
      setForm({
        utilisateur_id: '',
        coiffeur_id: '',
        service_id: '',
        creneau_id: ''
      });
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la réservation');
    }
  };

  return (
    <div className="container">
      <h2>Réserver un créneau</h2>
      <form onSubmit={handleSubmit}>
        <select name="utilisateur_id" value={form.utilisateur_id} onChange={handleChange} required>
          <option value="">Choisir un utilisateur</option>
          {utilisateurs.map(u => (
            <option key={u.id} value={u.id}>{u.nom}</option>
          ))}
        </select>

        <select name="coiffeur_id" value={form.coiffeur_id} onChange={handleChange} required>
          <option value="">Choisir un coiffeur</option>
          {coiffeurs.map(c => (
            <option key={c.id} value={c.id}>{c.nom}</option>
          ))}
        </select>

        <select name="service_id" value={form.service_id} onChange={handleChange} required>
          <option value="">Choisir un service</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>{s.nom}</option>
          ))}
        </select>

        <select name="creneau_id" value={form.creneau_id} onChange={handleChange} required>
          <option value="">Choisir un créneau</option>
          {creneaux.map(c => (
            <option key={c.id} value={c.id}>{c.date} à {c.heure}</option>
          ))}
        </select>

        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}

export default Booking;
