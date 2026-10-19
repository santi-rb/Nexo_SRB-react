import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">NEXO</div>
          <p>
            Tu plataforma de comida rápida favorita para estudiantes.
            Encuentra los mejores restaurantes y combos al mejor precio.
          </p>
        </div>

        <div className="footer-column">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#comida">Comidas</a></li>
            <li><a href="#restaurantes">Restaurantes</a></li>
            <li><a href="#carrito">Carrito</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Cuenta</h3>
          <ul>
            <li><a href="#perfil">Mi Perfil</a></li>
            <li><a href="#pedidos">Mis Pedidos</a></li>
            <li><a href="#configuracion">Configuración</a></li>
            <li><a href="#ayuda">Centro de Ayuda</a></li>
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
