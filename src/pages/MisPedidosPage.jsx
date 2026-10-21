import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function MisPedidosPage() {
  const { orders } = useCart();

  return (
    <div className="pedidos-page">
      <div className="pedidos-header-banner">
        <div className="encabezado-pedidos">
          <h1>Mis pedidos</h1>
          <p>Aquí puedes consultar el estado y el historial de tus pedidos de comida.</p>
        </div>

        <Link to="/comida" className="btn-nuevo-pedido">
          + Nuevo Pedido
        </Link>
      </div>

      <div className="pedidos-container">
        {orders.length === 0 ? (
          <div className="no-pedidos">
            <span className="no-pedidos-icon">📦</span>
            <h2>Aún no has realizado pedidos</h2>
            <p>Descubre los combos y restaurantes disponibles y realiza tu primera compra.</p>
            <Link to="/comida" className="btn-ir-comida">
              Ver Menú
            </Link>
          </div>
        ) : (
          <section className="pedidos-lista">
            {orders.map((order) => (
              <article key={order.id} className="pedido-card">
                <div className="pedido-header">
                  <div className="restaurante-title">
                    <span className="icon-rest">{order.icon}</span>
                    <div>
                      <h2>{order.id} - {order.restaurant}</h2>
                      <span className="order-date">{order.date}</span>
                    </div>
                  </div>

                  <span className={`estado-badge ${order.statusClass || 'enviado'}`}>
                    {order.status}
                  </span>
                </div>

                <div className="pedido-divider"></div>

                <div className="pedido-body">
                  <h4>Productos ordenados:</h4>
                  <ul className="items-list">
                    {order.items.map((it, idx) => (
                      <li key={idx}>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pedido-footer">
                    <div className="pedido-total">
                      Total: <strong>{order.total}</strong>
                    </div>

                    <div className="pedido-actions">
                      <Link to="/comida" className="btn-pedir-nuevo">
                        Pedir de nuevo
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
