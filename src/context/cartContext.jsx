import React, { useState, createContext } from "react";

export const cartCtx = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            let newCart = cart.map((itemMapeo) => {
                if (itemMapeo.id === item.id) {
                    itemMapeo.quantity = quantity;

                    return itemMapeo;
                } else return itemMapeo;
            });

            setCart(newCart);
        } else {
            let newCart = cart.map((item) => item);

            newCart.push({ ...item, quantity });

            setCart(newCart);
        }
    }

    function removeItem(item) {
        setCart(
            cart.filter(({ id }) => id !== item.id).map((item) => ({ ...item }))
        );
    }

    function clear() {
        setCart([]);
    }

    function getTotalItemsInCart() {
        return cart.reduce((totalQty, { quantity }) => totalQty + quantity, 0);
    }

    function isInCart(id) {
        let found = cart.some((item) => item.id === id);

        return found;
    }

    function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => (total += item.count * item.price));
        return total;
      }

    return (
        <cartCtx.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                getTotalItemsInCart,
                isInCart,
                getTotalPriceInCart
            }}
        >
            {children}
        </cartCtx.Provider>
    );
}
