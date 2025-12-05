import React from 'react';

function PersonajeCard({ personaje }) {
  const handleUnstuck = () => {
    fetch('/api/unstuck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guid: personaje.guid, faction: personaje.faction })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('¡Personaje desatascado!');
        } else {
          alert('Error al desatascar.');
        }
      })
      .catch(() => alert('Error de conexión.'));
  };

  return (
    <div className="personaje-card">
      <h3>{personaje.nombre}</h3>
      <p>Nivel: {personaje.nivel}</p>
      <button className="wow-btn" onClick={handleUnstuck}>
        Desatascar
      </button>
    </div>
  );
}

export default PersonajeCard;
