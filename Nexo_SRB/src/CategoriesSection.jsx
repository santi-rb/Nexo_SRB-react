import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { id: 'todos', label: 'Todos', icon: '▦' },
  { id: 'hamburguesas', label: 'Hamburguesas', icon: '🍔' },
  { id: 'pollo', label: 'Pollo', icon: '🍗' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'mexicana', label: 'Mexicana', icon: '🌮' },
  { id: 'bebidas', label: 'Bebidas', icon: '🥤' },
  { id: 'postres', label: 'Postres', icon: '🍰' },
];

export default function CategoriesSection({ activeCategory = 'todos', onSelectCategory }) {
  const [selected, setSelected] = useState(activeCategory);
  const navigate = useNavigate();

  const handleSelect = (catId) => {
    setSelected(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      if (catId === 'todos') {
        navigate('/comida');
      } else {
        navigate(`/comida?cat=${catId}`);
      }
    }
  };

  const handleMore = () => {
    navigate('/comida');
  };

  return (
    <section className="categories-section">
      <h2>Categorías</h2>

      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category ${selected === cat.id ? 'active' : ''}`}
            onClick={() => handleSelect(cat.id)}
          >
            {cat.icon} {cat.label}
          </button>
        ))}

        <button type="button" className="more" onClick={handleMore}>
          Más →
        </button>
      </div>
    </section>
  );
}

export { CategoriesSection };
