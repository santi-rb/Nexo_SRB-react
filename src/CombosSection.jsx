import React from 'react';

const COMBOS = [
  {
    id: 'combo-personal-frisby',
    name: 'Combo Personal Frisby',
    description: 'Pollo, papas y bebida',
    price: '$25.900',
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=90',
    imageAlt: 'Combo de pollo',
  },
  {
    id: 'combo-2-piezas-kfc',
    name: 'Combo 2 Piezas KFC',
    description: 'Pollo crujiente, papas y bebida',
    price: '$28.900',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-U-SsD0Bl-FPCEz156N6vbVcEHTNVIP4m1OOlq3_iw&s=10',
    imageAlt: 'Pollo frito',
  },
  {
    id: 'combo-clasico-burger-king',
    name: 'Combo Clásico Burger King',
    description: 'Hamburguesa, papas y bebida',
    price: '$24.900',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5_NRkuXPWQ12CV32zhtmzC-UlByshE76rpPrgPUzFQ&s',
    imageAlt: 'Hamburguesa con papas',
  },
  {
    id: 'combo-familiar-frisby',
    name: 'Combo Familiar Frisby',
    description: 'Pollo para compartir con papas',
    price: '$49.900',
    imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=90',
    imageAlt: 'Pollo frito familiar',
  },
];

export default function CombosSection({ combos = COMBOS, onAddToCart }) {
  return (
    <section className="combos-section">
      <div className="section-title">
        <h2>Combos populares</h2>
        <a href="#combos">Ver todos</a>
      </div>

      <div className="combo-grid">
        {combos.map((combo) => (
          <article key={combo.id} className="combo-card">
            <h3>{combo.name}</h3>

            <div className="combo-image">
              <img src={combo.imageUrl} alt={combo.imageAlt} />
            </div>

            <p>{combo.description}</p>

            <div className="combo-bottom">
              <strong>{combo.price}</strong>
              <button
                type="button"
                aria-label={`Agregar ${combo.name} al carrito`}
                onClick={() => onAddToCart && onAddToCart(combo)}
              >
                +
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export { CombosSection };
