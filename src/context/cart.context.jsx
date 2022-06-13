import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
        );
    }

return [...cartItems, {...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id !== cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    );
}

const clearItemFromCart = (clearItems, cartItemToRemove) => {
    return clearItems.filter(cartItem => cartItem.id !== clearItemFromCart.id);
}

export const CartContext = createContext ({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0 ,
   cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total  + cartItem.quantity * cartItem.price, 0)
        setCartCount(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(addCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (clearCartItem) => {
        setCartItems(addCartItem(cartItems,clearItemFromCart));
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartCount, cartCount, removeItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

