import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import "../CheckoutForm/CheckoutForm.css";

function Checkout() {
    const { cart, clear } = useContext(cartCtx);
    const { orderId } = useParams();
    const { state } = useLocation();

    if (cart.length) {
        clear();
    }

    return (
        <div>
            <h2>Gracias por tu compra {state.buyer.name}!</h2>
            <h4 className="text-center">
                A la brevedad se le enviara la factura a su dirección correo:{" "}
                {state.buyer.email}.
            </h4>
            <h4 className="text-center">Su número de orden es: {orderId}</h4>
        </div>
    );
}

export default Checkout;
