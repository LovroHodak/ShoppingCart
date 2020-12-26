import React, { useState } from "react";
import "./App.css";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  //states
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: "AA Battery",
      cost: 2.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc",
    },
    {
      name: "Blanket",
      cost: 19.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc",
    },
  ]);

  //functions
  const addToCard = (product) => {
    console.log("ADD to card", product);
    setCart([...cart, { ...product }]);
  };

  const removeFromCard = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCard(product)}>Add to card</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCard(product)} >Remove</button>
          </div>
        ))}
      </div>
    </>
  )



  //return
  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)} >Go to Cart ({cart.length}) </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)} >View Products </button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
