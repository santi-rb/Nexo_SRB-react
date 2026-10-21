import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RESTAURANTS_DATA } from './RestaurantesPage';
import { useCart } from '../context/CartContext';

export default function RestauranteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const restaurant = RESTAURANTS_DATA.find(
    (r) => r.id.toLowerCase() === (id || '').toLowerCase()
  ) || RESTAURANTS_DATA[0];

  return (
    <div className="restaurant-detail-page">
      {/* BANNER SUPERIOR */}
      <div
        className="restaurant-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${restaurant.banner})`,
        }}
      >
        <div className="banner-content">
          <button
            type="button"
            className="btn-volver"
            onClick={() => navigate('/restaurantes')}
          >
            ← Volver a Restaurantes
          </button>

          <div className="restaurant-header-card">
            <div className="logo-box">
              <img src={restaurant.logoUrl} alt={restaurant.name} />
            </div>
            <div>
              <h1>{restaurant.name}</h1>
              <p className="subtitle">{restaurant.category}</p>
              <div className="badges">
                <span className="badge-star">{restaurant.stars} {restaurant.ratingNum}</span>
                <span className="badge-time">⏱ {restaurant.deliveryTime}</span>
                <span className="badge-convenio">🎓 Convenio Estudiantil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMACIÓN Y MENÚ */}
      <div className="restaurant-menu-container">
        <div className="about-restaurant">
          <h2>Sobre {restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>

        <div className="menu-header">
          <h2>Menú y Promociones Disponibles</h2>
          <p>Selecciona tus platos favoritos para agregarlos al carrito</p>
        </div>

        <div className="menu-items-grid">
          {restaurant.menu.map((dish) => (
            <article key={dish.id} className="menu-dish-card">
              <div className="dish-details">
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <div className="dish-price">{dish.priceStr}</div>
              </div>

              <button
                type="button"
                className="btn-add-dish"
                onClick={() =>
                  addToCart({
                    id: dish.id,
                    name: `${dish.name} (${restaurant.name})`,
                    description: dish.desc,
                    price: dish.price,
                    priceStr: dish.priceStr,
                    image: restaurant.logoUrl,
                  })
                }
              >
                + Agregar
              </button>
            </article>
          ))}
        </div>

        <div className="menu-actions">
          <Link to="/carrito" className="btn-ir-carrito">
            🛒 Ver mi Carrito
          </Link>
          <Link to="/comida" className="btn-mas-comidas">
            🍔 Explorar más comidas
          </Link>
        </div>
      </div>
    </div>
  );
}
