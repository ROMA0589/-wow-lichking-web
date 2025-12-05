import React, { useState } from 'react';
import './App.css';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [regUser, setRegUser] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regError, setRegError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Completa ambos campos.');
      return;
    }
    // Aquí iría la lógica de conexión al servidor/API
    alert('Login enviado (conexión a servidor pendiente)');
    setShowLogin(false);
    setUsername('');
    setPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegError('');
    if (!regUser || !regPass || !regEmail) {
      setRegError('Completa todos los campos.');
      return;
    }
    // Aquí iría la lógica de conexión al servidor/API
    alert('Registro enviado (conexión a servidor pendiente)');
    setShowRegister(false);
    setRegUser('');
    setRegPass('');
    setRegEmail('');
  };

  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline disablePictureInPicture>
        <source src="/lichking.mp4" type="video/mp4" />
        Tu navegador no soporta el video de fondo.
      </video>
      <div className="wow-topbar">
        <img src="/logo192.png" alt="WoW Lich King Logo" className="wow-logo" />
        <span className="wow-topbar-center">24/7 CUBA_GAMER</span>
        <button className="wow-btn-top" onClick={() => setShowLogin(true)}>Login</button>
        <button className="wow-btn-top" onClick={() => setShowRegister(true)}>Registrarse</button>
            {showRegister && (
              <div className="wow-modal-bg" onClick={() => setShowRegister(false)}>
                <div className="wow-modal" onClick={e => e.stopPropagation()}>
                  <h2>Registrarse</h2>
                  <form onSubmit={handleRegister}>
                    <input
                      type="text"
                      placeholder="Usuario"
                      value={regUser}
                      onChange={e => setRegUser(e.target.value)}
                      className="wow-input"
                      autoFocus
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={regEmail}
                      onChange={e => setRegEmail(e.target.value)}
                      className="wow-input"
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={regPass}
                      onChange={e => setRegPass(e.target.value)}
                      className="wow-input"
                    />
                    {regError && <div className="wow-error">{regError}</div>}
                    <button type="submit" className="wow-btn-modal">Crear cuenta</button>
                    <button type="button" className="wow-btn-modal-cancel" onClick={() => setShowRegister(false)}>Cerrar</button>
                  </form>
                </div>
              </div>
            )}
      </div>
      {showLogin && (
        <div className="wow-modal-bg" onClick={() => setShowLogin(false)}>
          <div className="wow-modal" onClick={e => e.stopPropagation()}>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="wow-input"
                autoFocus
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="wow-input"
              />
              {error && <div className="wow-error">{error}</div>}
              <button type="submit" className="wow-btn-modal">Entrar</button>
              <button type="button" className="wow-btn-modal-cancel" onClick={() => setShowLogin(false)}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
      <div className="content">
        <h1>Wrath of the Lich King</h1>
        <p>Explora la era del Rey Exánime en World of Warcraft.</p>
        <div className="wow-buttons">
          {/* <button className="wow-btn">Inicio</button> */}
          {/* <button className="wow-btn">Registro</button> */}
          <button className="wow-btn" onClick={() => window.open('/reglas.html', '_blank')}>Reglas</button>
          <button className="wow-btn">Donaciones</button>
          <button className="wow-btn" onClick={() => window.open('/ranking.html', '_blank')}>Ranking</button>
          <button className="wow-btn">Noticias</button>
          {/* <button className="wow-btn">Panel de cuentas</button> */}
          {/* <button className="wow-btn">Panel GM/Admin</button> */}
          {/* <button className="wow-btn">Publicidad</button> */}
        </div>
        {/* Secciones sugeridas para cada botón:
            - Inicio: Información general y bienvenida
            - Registro: Formulario de creación de cuenta
            - Descargas: Links para cliente y addons
            - Normas: Reglas del servidor
            - Donaciones: Información y métodos
            - Ranking: Armory, ladder, PvP, top players
            - Noticias: Actualizaciones y eventos
            - Panel de cuentas: Gestión de usuario
            - Panel GM/Admin: Acceso administrativo
            - Publicidad: Descripción y promoción del servidor
        */}
      </div>
      <footer className="wow-footer">
        &copy; {new Date().getFullYear()} CUBA_GAMER. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
