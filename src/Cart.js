import React from "react";

export default function Cart({ cart, removeFromCard }) {
  return (
    <div>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCard(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
