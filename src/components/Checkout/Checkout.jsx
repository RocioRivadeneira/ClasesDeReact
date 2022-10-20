import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import "../CheckoutForm/CheckoutForm.css";

function Checkout() {
    const { cart, clear } = useContext(cartCtx);

    if (cart.length) {
        clear();
    }

    return (
        <div>
            
            <h2>Gracias por tu compra!</h2>

        </div>
    );
}

export default Checkout;
