import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
            NEXO
          </Link>
          <p>
            Tu plataforma de comida rápida favorita para estudiantes.
            Encuentra los mejores restaurantes y combos al mejor precio.
          </p>
        </div>

        <div className="footer-column">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/comida">Comidas</Link></li>
            <li><Link to="/restaurantes">Restaurantes</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Cuenta</h3>
          <ul>
            <li><Link to="/perfil">Mi Perfil</Link></li>
            <li><Link to="/mis-pedidos">Mis Pedidos</Link></li>
            <li><Link to="/perfil">Configuración</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Proyecto</h3>
          <ul>
            <li><span>Nexo SRB</span></li>
            <li><span>Santiago Rangel Bonilla</span></li>
            <li><span>Convenios escolares</span></li>
            <li><span>Entrega rápida</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} NEXO SRB - Todos los derechos reservados.</p>
        <p>Proyecto desarrollado para estudiantes</p>
      </div>
    </footer>
  );
}

export { Footer };
