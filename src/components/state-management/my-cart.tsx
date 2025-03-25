import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/slices/cartSlice';

function MyCart() {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>My Cart</h1>
        {
            cart.items.length > 0 ? (
                <ul>
                {cart.items.map((item) => (
                    <li key={item.id}>
                    {item.name} - Quantity: {item.quantity}
                    <button className="border" onClick={() => dispatch(removeItem(item))}>Remove</button>
                    </li>
                ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )
        }
    </div>
  );
}

export default MyCart;