import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 'combo-personal-frisby',
      name: 'Combo Personal Frisby',
      description: 'Pollo, papas y bebida.',
      price: 25900,
      priceStr: '$25.900',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=90',
    },
    {
      id: 'hamburguesa-clasica',
      name: 'Hamburguesa Clásica',
      description: 'Hamburguesa, papas y bebida.',
      price: 24900,
      priceStr: '$24.900',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90',
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: 'PED-001',
      restaurant: "McDonald's",
      icon: '🍔',
      status: 'Enviado',
      statusClass: 'enviado',
      date: 'Hoy, 12:45 PM',
      total: '$38.900',
      items: ['1x Hamburguesa Doble', '1x Papas Medianas', '1x Coca-Cola'],
    },
    {
      id: 'PED-002',
      restaurant: 'Frisby',
      icon: '🍗',
      status: 'En preparación',
      statusClass: 'preparando',
      date: 'Hoy, 01:15 PM',
      total: '$28.900',
      items: ['1x Combo Personal', '1x Porción de Arepas'],
    },
  ]);

  const [toast, setToast] = useState('');

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      const priceNum =
        typeof item.price === 'number'
          ? item.price
          : parseInt(String(item.price || item.priceStr || '0').replace(/[^0-9]/g, ''), 10) || 20000;
      return [
        ...prev,
        {
          id: item.id || `item-${Date.now()}`,
          name: item.name,
          description: item.description || '',
          quantity: 1,
          price: priceNum,
          priceStr: item.priceStr || `$${priceNum.toLocaleString('es-CO')}`,
          image:
            item.image ||
            item.imageUrl ||
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90',
        },
      ];
    });

    setToast(`¡${item.name} agregado al carrito!`);
    setTimeout(() => setToast(''), 3000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const placeOrder = () => {
    if (cart.length === 0) return null;
    const newOrderId = `PED-00${orders.length + 1}`;
    const newOrder = {
      id: newOrderId,
      restaurant: cart[0].name.includes('Frisby') ? 'Frisby' : 'Nexo Delivery',
      icon: '🛒',
      status: 'Recibido',
      statusClass: 'recibido',
      date: 'Recién realizado',
      total: `$${(subtotal + deliveryFee).toLocaleString('es-CO')}`,
      items: cart.map((i) => `${i.quantity}x ${i.name}`),
    };
    setOrders([newOrder, ...orders]);
    clearCart();
    return newOrderId;
  };

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const deliveryFee = cart.length > 0 ? 3000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
        totalItems,
        subtotal,
        deliveryFee,
        total,
        toast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    return {
      cart: [],
      orders: [],
      addToCart: () => {},
      removeFromCart: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      placeOrder: () => null,
      totalItems: 0,
      subtotal: 0,
      deliveryFee: 0,
      total: 0,
      toast: '',
    };
  }
  return context;
}
