import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PerfilPage() {
  const [profileData, setProfileData] = useState({
    nombre: 'Santiago Rangel Bonilla',
    correo: 'santiago.rangel@colegio.edu.co',
    telefono: '+57 312 456 7890',
    grado: '11°A - Secundaria Técnica',
    colegio: 'Institución Educativa Técnica Santiago Rangel',
    direccion: 'Sede Principal - Cafetería Estudiantil',
  });

  const [savedToast, setSavedToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="perfil-page">
      <div className="perfil-header-banner">
        <div className="perfil-avatar-box">
          <div className="avatar-circle">👤</div>
          <div className="perfil-info-user">
            <h1>{profileData.nombre}</h1>
            <p className="user-email">{profileData.correo}</p>
            <span className="badge-student">🎓 {profileData.grado}</span>
          </div>
        </div>

        <div className="perfil-quick-actions">
          <Link to="/mis-pedidos" className="btn-quick">
            🍴 Ver Mis Pedidos
          </Link>
          <Link to="/carrito" className="btn-quick sec">
            🛒 Mi Carrito
          </Link>
        </div>
      </div>

      <div className="perfil-container">
        {savedToast && (
          <div className="alert-success" role="alert">
            ✅ ¡Información de perfil actualizada exitosamente!
          </div>
        )}

        <div className="perfil-grid">
          {/* FORMULARIO DATOS PERSONALES */}
          <section className="perfil-card">
            <h2>Datos del Estudiante</h2>
            <form onSubmit={handleSubmit} className="perfil-form">
              <div className="form-group">
                <label>Nombre Completo:</label>
                <input
                  type="text"
                  value={profileData.nombre}
                  onChange={(e) =>
                    setProfileData({ ...profileData, nombre: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  value={profileData.correo}
                  onChange={(e) =>
                    setProfileData({ ...profileData, correo: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Teléfono de Contacto:</label>
                <input
                  type="tel"
                  value={profileData.telefono}
                  onChange={(e) =>
                    setProfileData({ ...profileData, telefono: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Institución Educativa:</label>
                <input
                  type="text"
                  value={profileData.colegio}
                  onChange={(e) =>
                    setProfileData({ ...profileData, colegio: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Dirección de Entrega Predeterminada:</label>
                <input
                  type="text"
                  value={profileData.direccion}
                  onChange={(e) =>
                    setProfileData({ ...profileData, direccion: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn-guardar">
                💾 Guardar Cambios
              </button>
            </form>
          </section>

          {/* AJUSTES Y PREFERENCIAS */}
          <aside className="perfil-sidebar">
            <div className="perfil-card mini">
              <h3>Convenio Estudiantil</h3>
              <p>Tu cuenta cuenta con tarifa preferencial en domicilios escolares de Nexo.</p>
              <div className="status-pill active">Convenio Activo 2026</div>
            </div>

            <div className="perfil-card mini">
              <h3>Enlaces Rápidos</h3>
              <ul className="quick-links-list">
                <li><Link to="/comida">🍔 Pedir Comida</Link></li>
                <li><Link to="/restaurantes">🍽 Restaurantes Cercanos</Link></li>
                <li><Link to="/mis-pedidos">📦 Rastrear Domicilios</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
