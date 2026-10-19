import React from 'react';

export default function Header({ activeItem = 'inicio', onItemClick }) {
  const navItems = [
    { id: 'inicio', label: '🏠 Inicio', href: '#inicio' },
    { id: 'comida', label: '🍔 Comida', href: '#comida' },
    { id: 'restaurantes', label: '🍽 Restaurantes', href: '#restaurantes' },
    { id: 'carrito', label: '🛒 Carrito', href: '#carrito' },
    { id: 'perfil', label: '👤 Perfil', href: '#perfil' },
    { id: 'pedidos', label: '🍴 Mis Pedidos', href: '#pedidos' },
  ];

  const handleClick = (e, id) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(id);
    }
  };

  return (
    <header className="barra-superior">
      <div className="logo">
        NEXO
      </div>

      <nav className="menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={activeItem === item.id ? 'activo' : ''}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export { Header };
