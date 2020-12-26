import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import Cart from "./Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  //states
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  //functions
  const addToCard = (product) => {
    console.log("ADD to card", product);
    setCart([...cart, { ...product }]);
  };

  const removeFromCard = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  //return
  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length}){" "}
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products{" "}
        </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCard={addToCard} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCard={removeFromCard} />}
    </div>
  );
}

export default App;
