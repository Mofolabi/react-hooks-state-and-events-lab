import React, { useState } from "react";

function Item(props) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{props.name}</span>
      <span>{props.category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
