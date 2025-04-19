import React from 'react'
import  { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from './redux/cartSlice'


const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    const handleQuantityChange = (id, quantity) => {
        if (quantity < 0) {
        dispatch(updateQuantity({ id, quantity }));
    };

    const  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    retrun (
        <div>
      
                {cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>                 
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                        />
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                            </button>
                    </div>
                ))}
         
            <h2>Total: ${total}</h2>
        </div>


    )
}
}
export default CartPage;