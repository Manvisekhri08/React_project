import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems containe productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //If found increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    // return new array with modified cartItems
    return [...cartItems, {...productToAdd, quantity : 1}];
};

export const CartContext = createContext ({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {}
})

export const CartProvider = ({children}) => {
    const[isCartOpen, setIsCartOpen] = useState(false);
    const[cartItems, setCartItems] = useState([]);

    const addItemCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = { isCartOpen, setIsCartOpen, addItemCart, cartItems }
    return (
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}