import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import RestaurantsSection from './RestaurantsSection';
import CombosSection from './CombosSection';
import Footer from './Footer';
import './App.css';

function App() {
  const [activeNav, setActiveNav] = useState('inicio');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const handleAddToCart = (combo) => {
    setToastMessage(`¡${combo.name} agregado al carrito!`);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="nexo-app">
      {/* BARRA SUPERIOR / HEADER */}
      <Header activeItem={activeNav} onItemClick={handleNavClick} />

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {/* HERO SECTION */}
        <HeroSection
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          onSearchSubmit={(val) => console.log('Buscando:', val)}
        />

        {/* CATEGORÍAS */}
        <CategoriesSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* RESTAURANTES DESTACADOS */}
        <RestaurantsSection />

        {/* COMBOS POPULARES */}
        <CombosSection onAddToCart={handleAddToCart} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* TOAST DE CONFIRMACIÓN */}
      {toastMessage && (
        <div className="cart-toast" role="alert">
          🛒 {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
