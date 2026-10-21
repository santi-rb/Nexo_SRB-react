import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

export default function Header({ activeItem, onItemClick }) {
  const { totalItems } = useCart();

  const navLinks = [
    { to: '/', label: '🏠 Inicio', id: 'inicio', end: true },
    { to: '/comida', label: '🍔 Comida', id: 'comida' },
    { to: '/restaurantes', label: '🍽 Restaurantes', id: 'restaurantes' },
    { to: '/carrito', label: '🛒 Carrito', id: 'carrito', badge: totalItems },
    { to: '/perfil', label: '👤 Perfil', id: 'perfil' },
    { to: '/mis-pedidos', label: '🍴 Mis Pedidos', id: 'pedidos' },
  ];

  return (
    <header className="barra-superior">
      <Link to="/" className="logo">
        NEXO
      </Link>

      <nav className="menu">
        {navLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive || (activeItem && activeItem === item.id) ? 'activo' : ''
            }
            onClick={() => onItemClick && onItemClick(item.id)}
          >
            {item.label}
            {item.badge > 0 && <span className="cart-badge">{item.badge}</span>}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export { Header };
