import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './Header';
import Footer from './Footer';
import InicioPage from './pages/InicioPage';
import ComidasPage from './pages/ComidasPage';
import RestaurantesPage from './pages/RestaurantesPage';
import RestauranteDetailPage from './pages/RestauranteDetailPage';
import CarritoPage from './pages/CarritoPage';
import PerfilPage from './pages/PerfilPage';
import MisPedidosPage from './pages/MisPedidosPage';
import './App.css';

function ToastNotifier() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div className="cart-toast" role="alert">
      🛒 {toast}
    </div>
  );
}

function AppContent() {
  return (
    <div className="nexo-app">
      {/* BARRA SUPERIOR CON NAVEGACIÓN REACT ROUTER */}
      <Header />

      {/* RUTAS PRINCIPALES DE LA APLICACIÓN */}
      <main>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
          <Route path="/comida" element={<ComidasPage />} />
          <Route path="/restaurantes" element={<RestaurantesPage />} />
          <Route path="/restaurante/:id" element={<RestauranteDetailPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/mis-pedidos" element={<MisPedidosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* FOOTER GENERAL */}
      <Footer />

      {/* NOTIFICACIÓN FLOTANTE */}
      <ToastNotifier />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}
