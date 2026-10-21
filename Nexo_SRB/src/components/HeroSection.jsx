import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ searchValue, onSearchChange, onSearchSubmit }) {
  const [localSearch, setLocalSearch] = useState('');
  const navigate = useNavigate();

  const query = searchValue !== undefined ? searchValue : localSearch;

  const handleChange = (e) => {
    const val = e.target.value;
    if (onSearchChange) onSearchChange(val);
    else setLocalSearch(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
    } else {
      const trimmed = query.trim();
      if (trimmed) {
        navigate(`/comida?search=${encodeURIComponent(trimmed)}`);
      } else {
        navigate('/comida');
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>¿Qué quieres comer hoy?</h1>

        <p>
          Encuentra tus restaurantes favoritos y disfruta de los mejores combos.
        </p>

        <form className="search-box" onSubmit={handleSubmit}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={handleSubmit}
            title="Buscar"
          >
            🔍
          </span>

          <input
            type="text"
            placeholder="Buscar comida o restaurante..."
            value={query}
            onChange={handleChange}
          />

          <button type="submit" style={{ display: 'none' }} aria-label="Buscar" />
        </form>
      </div>

      <div
        className="hero-food"
        onClick={() => navigate('/comida')}
        style={{ cursor: 'pointer' }}
        title="Explorar comidas"
      >
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
          alt="Hamburguesa con papas"
        />
      </div>
    </section>
  );
}

export { HeroSection };
