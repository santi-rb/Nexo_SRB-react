import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CarritoPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
    placeOrder,
  } = useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFinalizar = () => {
    if (cart.length === 0) return;
    const orderId = placeOrder();
    setCheckoutSuccess(true);
    setTimeout(() => {
      navigate('/mis-pedidos');
    }, 1800);
  };

  return (
    <div className="carrito-page">
      {/* TÍTULO */}
      <section className="carrito-titulo">
        <h1>Carrito de compras</h1>
        <p>Revisa tus productos antes de realizar tu pedido</p>
      </section>

      {/* CONTENIDO DEL CARRITO */}
      <section className="carrito-contenido">
        {checkoutSuccess ? (
          <div className="checkout-success-box">
            <div className="success-icon">🎉</div>
            <h2>¡Tu pedido fue realizado con éxito!</h2>
            <p>Estamos preparando tu orden. Te estamos redirigiendo a Mis Pedidos...</p>
            <Link to="/mis-pedidos" className="btn-finalizar" style={{ display: 'inline-block', width: 'auto', padding: '12px 25px' }}>
              Ir a Mis Pedidos
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="carrito-vacio">
            <span className="vacio-icon">🛒</span>
            <h2>Tu carrito está vacío</h2>
            <p>Parece que aún no has agregado comidas deliciosas a tu carrito.</p>
            <div className="vacio-acciones">
              <Link to="/comida" className="btn-explorar">
                🍔 Explorar comidas
              </Link>
              <Link to="/restaurantes" className="btn-explorar sec">
                🍽 Ver restaurantes
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* LISTA DE PRODUCTOS */}
            <div className="productos-col">
              <h2>Tus productos ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>

              {cart.map((item) => (
                <article key={item.id} className="producto-item">
                  <div className="producto-imagen">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="producto-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <strong className="precio">{item.priceStr}</strong>
                  </div>

                  <div className="producto-acciones">
                    <div className="cantidad-controls">
                      <button
                        type="button"
                        className="cantidad-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                        title="Disminuir"
                      >
                        −
                      </button>
                      <span className="cantidad-num">{item.quantity}</span>
                      <button
                        type="button"
                        className="cantidad-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                        title="Aumentar"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="eliminar-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Eliminar producto"
                    >
                      🗑 Eliminar
                    </button>
                  </div>
                </article>
              ))}

              <div className="seguir-comprando">
                <Link to="/comida">← Seguir explorando comidas</Link>
              </div>
            </div>

            {/* ASIDE RESUMEN */}
            <aside className="resumen-pedido">
              <h2>Resumen del pedido</h2>

              <div className="resumen-linea">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-CO')}</span>
              </div>

              <div className="resumen-linea">
                <span>Domicilio</span>
                <span>${deliveryFee.toLocaleString('es-CO')}</span>
              </div>

              <div className="resumen-linea descuento">
                <span>Descuento estudiante</span>
                <span className="gratis">Cupón NEXO-COL</span>
              </div>

              <div className="separador"></div>

              <div className="resumen-total">
                <span>Total</span>
                <strong>${total.toLocaleString('es-CO')}</strong>
              </div>

              <button
                type="button"
                className="btn-finalizar"
                onClick={handleFinalizar}
              >
                Finalizar compra
              </button>

              <p className="mensaje-seguridad">
                🔒 Compra segura y fácil para estudiantes
              </p>
            </aside>
          </>
        )}
      </section>
    </div>
  );
}
