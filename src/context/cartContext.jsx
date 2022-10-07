import React, { useState, createContext } from "react";

export const cartCtx = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item, count) {
        if (isInCart(item.id)) {
            let newCart = cart.map((itemMapeo) => {
                if (itemMapeo.id === item.id) {
                    itemMapeo.count += count;
                    return itemMapeo;
                } else return itemMapeo;
            });

            setCart(newCart);
        } else {
            let newCart = cart.map((item) => item);
            newCart.push({ ...item, count: count });
            setCart(newCart);
        }
    }

    function getTotalItemsInCart() {
        return cart.reduce((acc, { quantity }) => acc + quantity, 0);
    }

    function isInCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
    }

    return (
        //3. pasamos el objeto Value a los componentes hijos
        <cartCtx.Provider
            value={{ cart, addItem, getTotalItemsInCart, isInCart }}
        >
            {children}
        </cartCtx.Provider>
    );
}

// export { cartCtx };
