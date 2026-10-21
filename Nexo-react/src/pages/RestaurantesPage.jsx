import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RESTAURANTS_DATA = [
  {
    id: 'mcdonalds',
    name: "McDonald's",
    category: 'Hamburguesas, combos y bebidas',
    stars: '★★★★★',
    ratingNum: '4.8',
    deliveryTime: '25-35 min',
    logoUrl: 'https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png',
    banner: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=90',
    description: 'Líder mundial en hamburguesas clásicas, papas legendarias y deliciosos postres McFlurry.',
    menu: [
      { id: 'mc-bigmac', name: 'Big Mac Combo', price: 26900, priceStr: '$26.900', desc: 'Doble carne, salsa especial, lechuga, queso, pepinillos y cebolla.' },
      { id: 'mc-cuarto', name: 'Cuarto de Libra con Queso', price: 25500, priceStr: '$25.500', desc: 'Carne 100% de res, queso cheddar, cebolla y pepinillos.' },
      { id: 'mc-papas', name: 'Papas Fritas Medianas', price: 9900, priceStr: '$9.900', desc: 'Doradas y crujientes.' },
      { id: 'mc-flurry', name: 'McFlurry Oreo', price: 11900, priceStr: '$11.900', desc: 'Helado de vainilla con galletas Oreo trituradas.' },
    ],
  },
  {
    id: 'frisby',
    name: 'Frisby',
    category: 'Pollo colombiano y combos',
    stars: '★★★★★',
    ratingNum: '4.9',
    deliveryTime: '20-30 min',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNmj5WK5pWhkHPBYBW33XAc3QnMS1Y0YS9U6ACg6Aog&s=10',
    banner: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=90',
    description: 'Nadie lo hace como Frisby lo hace. El pollo apanado más crocante y delicioso de Colombia.',
    menu: [
      { id: 'frisby-personal', name: 'Combo Personal Frisby', price: 25900, priceStr: '$25.900', desc: '2 presas de pollo apanado, papas francesas y gaseosa.' },
      { id: 'frisby-familiar', name: 'Combo Familiar (8 presas)', price: 49900, priceStr: '$49.900', desc: '8 presas, porción familiar de papas y arepas.' },
      { id: 'frisby-tornados', name: 'Tornados Frisby', price: 18900, priceStr: '$18.900', desc: 'Tiras de pechuga crocante con salsa miel mostaza.' },
    ],
  },
  {
    id: 'subway',
    name: 'Subway',
    category: 'Sándwiches frescos y bebidas',
    stars: '★★★★★',
    ratingNum: '4.7',
    deliveryTime: '20-30 min',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8HgNSp_Gpo4Hzm-KAL146u27IQuiQOrTS_DCQQhLxA&s',
    banner: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=90',
    description: 'Prepara tu sándwich como te gusta: pan horneado fresco, vegetales crujientes y carnes selectas.',
    menu: [
      { id: 'sub-bmt', name: 'Sub Italiano BMT (15 cm)', price: 21900, priceStr: '$21.900', desc: 'Pepperoni, salami Génova y jamón de cerdo con tus vegetales favoritos.' },
      { id: 'sub-teriyaki', name: 'Sub Pollo Teriyaki (15 cm)', price: 22900, priceStr: '$22.900', desc: 'Tiras de pollo marinadas en salsa teriyaki agridulce.' },
      { id: 'sub-cookies', name: 'Pack de Galletas (3 unidades)', price: 8500, priceStr: '$8.500', desc: 'Chips de chocolate recién horneadas.' },
    ],
  },
  {
    id: 'kfc',
    name: 'KFC',
    category: 'Pollo frito y combos familiares',
    stars: '★★★★★',
    ratingNum: '4.7',
    deliveryTime: '30-40 min',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3g3D_Tan0wPlrY-Yyl1HprPhfWAmjLlOtAEAnGO894p6a1PsAVGYvUK9&s=10',
    banner: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=90',
    description: 'Receta secreta del Coronel Sanders con 11 hierbas y especias. Para chuparse los dedos.',
    menu: [
      { id: 'kfc-combo2', name: 'Combo 2 Piezas Kentucky', price: 28900, priceStr: '$28.900', desc: '2 piezas de pollo, papas medianas y gaseosa.' },
      { id: 'kfc-popcorn', name: 'Popcorn Chicken Grande', price: 17900, priceStr: '$17.900', desc: 'Trozos de pollo 100% pechuga marinados y empanizados.' },
      { id: 'kfc-sandwich', name: 'Coronel Sándwich BBQ', price: 22900, priceStr: '$22.900', desc: 'Filete de pechuga crujiente con salsa BBQ y queso.' },
    ],
  },
  {
    id: 'pizza-hut',
    name: 'Pizza Hut',
    category: 'Pizzas, promociones y combos',
    stars: '★★★★★',
    ratingNum: '4.6',
    deliveryTime: '35-45 min',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQrGq4t4Gd7zjRrDFCtlMQcSHGktuGa4RQxntroyH40okvjHMrIgco_yV&s=10',
    banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=90',
    description: 'Pizzas con masa pan crocante, borde relleno de queso y los mejores ingredientes.',
    menu: [
      { id: 'pizzahut-suprema', name: 'Pizza Mediana Suprema Pan', price: 34900, priceStr: '$34.900', desc: 'Pepperoni, carne de res, cerdo, champiñones, pimentón verde y cebolla.' },
      { id: 'pizzahut-hawaiana', name: 'Pizza Mediana Hawaiana', price: 31900, priceStr: '$31.900', desc: 'Jamón, piña dulce y doble queso mozzarella.' },
      { id: 'pizzahut-palitos', name: 'Palitos de Ajo con Salsa Marinara', price: 12900, priceStr: '$12.900', desc: 'Recién horneados con mantequilla de ajo.' },
    ],
  },
  {
    id: 'santa-rosa',
    name: 'Santa Rosa',
    category: 'Comida variada y platos especiales',
    stars: '★★★★★',
    ratingNum: '4.8',
    deliveryTime: '25-35 min',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LbVGUfKk77I4Wgjt4rG6DNFo_vGytVCEXfLBWSQ6Nw&s',
    banner: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=90',
    description: 'Chorizos santarrosanos auténticos, picadas familiares y comida tradicional colombiana.',
    menu: [
      { id: 'sr-chorizo', name: 'Chorizo Santarrosano con Arepa', price: 14900, priceStr: '$14.900', desc: 'Chorizo artesanal ahumado con arepa de choclo y limón.' },
      { id: 'sr-picada', name: 'Picada Especial para Dos', price: 42900, priceStr: '$42.900', desc: 'Chorizo, chicharrón, morcilla, papa criolla y plátano maduro.' },
      { id: 'sr-costillas', name: 'Costillas BBQ al Carbón', price: 36900, priceStr: '$36.900', desc: 'Tiernas costillas de cerdo glaseadas en salsa barbacoa de la casa.' },
    ],
  },
];

export default function RestaurantesPage() {
  const navigate = useNavigate();

  return (
    <div className="restaurantes-page">
      <div className="restaurantes-header-banner">
        <h1>Restaurantes disponibles</h1>
        <p>Los mejores restaurantes afiliados con convenio para estudiantes</p>
      </div>

      <div className="restaurantes-container">
        <div className="oferta-destacada">
          <h3>🚀 Beneficio Estudiantil Nexo</h3>
          <p>Envíos gratis en restaurantes seleccionados para pedidos superiores a $25.000.</p>
        </div>

        <div className="lista-restaurantes">
          {RESTAURANTS_DATA.map((rest) => (
            <article
              key={rest.id}
              className="card-restaurante"
              onClick={() => navigate(`/restaurante/${rest.id}`)}
            >
              <div className="card-rest-img">
                <img src={rest.logoUrl} alt={`Logo ${rest.name}`} />
              </div>

              <h2>{rest.name}</h2>
              <p>{rest.category}</p>

              <div className="estrellas">
                {rest.stars} <span className="rating-text">({rest.ratingNum})</span>
              </div>

              <div className="card-footer-info">
                <span>⏱ {rest.deliveryTime}</span>
              </div>

              <button
                type="button"
                className="btn-ver-rest"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/restaurante/${rest.id}`);
                }}
              >
                Ver restaurante
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
