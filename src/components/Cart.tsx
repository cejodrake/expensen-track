import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Car </div>
      <url>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </url>
      <button onClick={onClear}>clear</button>
    </>
  );
};

export default Cart;
