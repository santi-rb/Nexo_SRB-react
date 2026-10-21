import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FOOD_ITEMS = [
  {
    id: 'hamburguesa-doble',
    name: 'Hamburguesa Doble',
    restaurant: 'Burger King',
    category: 'hamburguesas',
    rating: '⭐⭐⭐⭐⭐',
    price: 24900,
    priceStr: '$24.900',
    description: 'Doble carne a la parrilla, queso derretido, lechuga y tomate fresco.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90',
  },
  {
    id: 'combo-personal-frisby',
    name: 'Combo Personal Frisby',
    restaurant: 'Frisby',
    category: 'pollo',
    rating: '⭐⭐⭐⭐⭐',
    price: 25900,
    priceStr: '$25.900',
    description: 'Pollo frito crocante con papas a la francesa y bebida.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=90',
  },
  {
    id: 'pizza-suprema',
    name: 'Pizza Suprema',
    restaurant: 'Pizza Hut',
    category: 'pizza',
    rating: '⭐⭐⭐⭐⭐',
    price: 29900,
    priceStr: '$29.900',
    description: 'Queso mozzarella, pepperoni, champiñones, pimentón y cebolla.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=90',
  },
  {
    id: 'combo-familiar-kfc',
    name: 'Combo Familiar',
    restaurant: 'KFC',
    category: 'pollo',
    rating: '⭐⭐⭐⭐⭐',
    price: 49900,
    priceStr: '$49.900',
    description: '8 piezas de pollo crujiente, ensalada familiar y papas grandes.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=90',
  },
  {
    id: 'papas-grandes',
    name: 'Papas Fritas Grandes',
    restaurant: "McDonald's",
    category: 'papas',
    rating: '⭐⭐⭐⭐⭐',
    price: 12900,
    priceStr: '$12.900',
    description: 'Papas fritas doraditas y crujientes con sal marina.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=90',
  },
  {
    id: 'nuggets-pollo',
    name: 'Nuggets de Pollo (10 pcs)',
    restaurant: "McDonald's",
    category: 'pollo',
    rating: '⭐⭐⭐⭐⭐',
    price: 18500,
    priceStr: '$18.500',
    description: 'Deliciosos bocados de pollo empanizado con salsas a elección.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=90',
  },
  {
    id: 'perro-especial',
    name: 'Perro Caliente Especial',
    restaurant: 'Santa Rosa',
    category: 'perros',
    rating: '⭐⭐⭐⭐⭐',
    price: 16900,
    priceStr: '$16.900',
    description: 'Salchicha americana, tocineta, queso fundido, papa picada y salsas.',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=90',
  },
  {
    id: 'helado-chocolate',
    name: 'Sundae de Chocolate',
    restaurant: "McDonald's",
    category: 'postres',
    rating: '⭐⭐⭐⭐⭐',
    price: 9900,
    priceStr: '$9.900',
    description: 'Helado suave de vainilla bañado en sirope caliente de chocolate.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=90',
  },
];

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'hamburguesas', label: '🍔 Hamburguesas' },
  { id: 'pollo', label: '🍗 Pollo' },
  { id: 'pizza', label: '🍕 Pizza' },
  { id: 'perros', label: '🌭 Perros' },
  { id: 'papas', label: '🍟 Papas' },
  { id: 'postres', label: '🍰 Postres' },
];

export default function ComidasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'todos';
  const searchParam = searchParams.get('search') || '';

  const [activeCat, setActiveCat] = useState(catParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useCart();

  const handleCategoryChange = (catId) => {
    setActiveCat(catId);
    if (catId === 'todos') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', catId);
    }
    setSearchParams(searchParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchParams.set('search', searchTerm.trim());
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const filteredItems = useMemo(() => {
    return FOOD_ITEMS.filter((item) => {
      const matchCat =
        activeCat === 'todos' || item.category === activeCat;
      const matchSearch =
        !searchTerm.trim() ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCat, searchTerm]);

  return (
    <div className="comidas-page">
      {/* HERO COMIDAS */}
      <section className="comidas-hero">
        <div className="hero-content">
          <h1>¿Qué quieres comer hoy?</h1>
          <p>Encuentra las mejores comidas y combos al mejor precio.</p>

          <form className="search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar comida o restaurante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              🔍 Buscar
            </button>
          </form>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
            alt="Hamburguesa destacada"
          />
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="categorias-filtro">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`cat-btn ${activeCat === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* OFERTA DEL DÍA */}
      <section className="oferta-dia">
        <h2>🔥 Oferta del Día</h2>
        <p>20% de descuento en todos los combos Frisby y Burger King para estudiantes.</p>
      </section>

      {/* PRODUCTOS */}
      <section className="comidas-grid">
        {filteredItems.length === 0 ? (
          <div className="no-results">
            <p>No encontramos comidas que coincidan con tu búsqueda.</p>
            <button
              type="button"
              className="cat-btn active"
              onClick={() => {
                setActiveCat('todos');
                setSearchTerm('');
                setSearchParams({});
              }}
            >
              Ver todas las comidas
            </button>
          </div>
        ) : (
          filteredItems.map((item) => (
            <article key={item.id} className="comida-card">
              <img src={item.image} alt={item.name} />

              <div className="comida-info">
                <h3>{item.name}</h3>
                <p className="restaurante-nombre">{item.restaurant}</p>
                <div className="estrellas">{item.rating}</div>
                <h4>{item.priceStr}</h4>

                <div className="comida-botones">
                  <button
                    type="button"
                    className="btn-ver"
                    onClick={() => setSelectedProduct(item)}
                  >
                    Ver detalles
                  </button>

                  <button
                    type="button"
                    className="btn-agregar"
                    onClick={() => addToCart(item)}
                  >
                    + Agregar
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </section>

      {/* MODAL DETALLES DEL PRODUCTO */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="modal-info">
              <h2>{selectedProduct.name}</h2>
              <p className="modal-restaurant">Restaurante: {selectedProduct.restaurant}</p>
              <p className="modal-desc">{selectedProduct.description}</p>
              <div className="modal-bottom">
                <span className="modal-price">{selectedProduct.priceStr}</span>
                <button
                  type="button"
                  className="btn-agregar"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  🛒 Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
