import React, { useReducer } from 'react';

const initialState = { 
  items: [],  // cart items
  products: [],
  cartSummary: {
    totalItems: 0,
    totalPrice: 0,
    items: []
  }
};

function cartReducer(state: any, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
        const updatedQuantityItems = state.items.map((item) => {
            if(item.id === action.payload.id){
                return {...item, quantity: action.payload.quantity}
            }
            return item;
        });
        return {...state, items: updatedQuantityItems};
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (item, quantity) =>{
    dispatch({type: 'UPDATE_QUANTITY', payload: {id: item.id, quantity: quantity}})
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button className="border" onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
            <button className="border" onClick={() => updateQuantity(item, Math.max(1, item.quantity -1))}>-</button>
            <button className="border" onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="border" onClick={() => addItem({ id: 1, name: 'Product A' })}>
        Add Product A
      </button>
      <button className="border" onClick={() => addItem({ id: 2, name: 'Product B' })}>
        Add Product B
      </button>
    </div>
  );
}

export default ShoppingCart;