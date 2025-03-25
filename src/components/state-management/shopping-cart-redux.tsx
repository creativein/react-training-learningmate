import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../../store/slices/cartSlice';

function ShoppingCartRedux() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button className="border" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button className="border" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}>-</button>
            <button className="border" onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="border" onClick={() => dispatch(addItem({ id: 1, name: 'Product A' }))}>
        Add Product A
      </button>
      <button className="border" onClick={() => dispatch(addItem({ id: 2, name: 'Product B' }))}>
        Add Product B
      </button>
    </div>
  );
}

export default ShoppingCartRedux;