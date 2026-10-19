import React from 'react';

export default function HeroSection({ searchValue = '', onSearchChange, onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchValue);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          ¿Qué quieres comer hoy?
        </h1>

        <p>
          Encuentra tus restaurantes favoritos y disfruta de los mejores combos.
        </p>

        <form className="search-box" onSubmit={handleSubmit}>
          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Buscar comida o restaurante..."
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </form>
      </div>

      <div className="hero-food">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
          alt="Hamburguesa con papas"
        />
      </div>
    </section>
  );
}

export { HeroSection };
