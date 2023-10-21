import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../components/context/cart.context';

const Checkout = () => {
    const{ cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
    return (
        <div>Hi I'm checkout
            <div>
            {
                cartItems.map((cartItem) => {
                    const{id, name, quantity} = cartItem;
                    return (
                        <div key={id}> 
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Checkout;