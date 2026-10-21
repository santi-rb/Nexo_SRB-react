import React from 'react';
import { useNavigate } from 'react-router-dom';

const RESTAURANTS = [
  {
    id: 'frisby',
    name: 'Frisby',
    category: 'Pollo • Combos • Más',
    rating: '⭐ 4.8 (2.5k)',
    logoClass: 'frisby-logo',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62CD34V2Wrb-UduTwt0tR5kdtkQ6crZIfi_N_jthsVQ&s=10',
  },
  {
    id: 'kfc',
    name: 'KFC',
    category: 'Pollo • Hamburguesas • Combos',
    rating: '⭐ 4.7 (1.8k)',
    logoClass: 'kfc-logo',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-FDgrZwtC_C92wzd1Cqq0_nT5T7bdrm4uk0KcIyyaA&s=10',
  },
  {
    id: 'burger-king',
    name: 'Burger King',
    category: 'Hamburguesas • Papas • Bebidas',
    rating: '⭐ 4.6 (1.2k)',
    logoClass: 'burger-logo',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZ3-S1CRrJqpH3w9Ip1Houc_tE6EMsOoeEK9SPnC2nQ&s',
  },
];

export default function RestaurantsSection({ restaurants = RESTAURANTS, onSelectRestaurant }) {
  const navigate = useNavigate();

  const handleClick = (rest) => {
    if (onSelectRestaurant) {
      onSelectRestaurant(rest);
    } else {
      navigate(`/restaurante/${rest.id}`);
    }
  };

  return (
    <section className="restaurants-section">
      <div className="section-title">
        <h2>Restaurantes destacados</h2>
        <button
          type="button"
          onClick={() => navigate('/restaurantes')}
          style={{ background: 'none', border: 'none', color: '#e31b16', cursor: 'pointer', fontSize: '15px' }}
        >
          Ver todos →
        </button>
      </div>

      <div className="restaurants">
        {restaurants.map((rest) => (
          <article
            key={rest.id}
            className="restaurant-card"
            onClick={() => handleClick(rest)}
            style={{ cursor: 'pointer' }}
          >
            <div className={`restaurant-logo ${rest.logoClass}`}>
              <img src={rest.logoUrl} alt={`Logo ${rest.name}`} />
            </div>

            <div className="restaurant-info">
              <h3>{rest.name}</h3>
              <p>{rest.category}</p>
              <div className="rating">{rest.rating}</div>
            </div>

            <span className="arrow">›</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export { RestaurantsSection };
