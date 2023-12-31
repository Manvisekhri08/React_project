import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import {CartDropDownContainer, CartItems, EmptyMessage}from'./cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../context/cart.context'; 

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const gotToCheckoutHandler =  () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems> 
                {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : <EmptyMessage>Your cart is empty</EmptyMessage>}
                {}
            </CartItems>
            <Button onClick = {gotToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;