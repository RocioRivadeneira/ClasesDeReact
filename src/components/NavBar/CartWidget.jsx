import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartCtx } from "../../context/cartContext";

function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartCtx);
    return (
        <>
            <span classID="carrito">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{getTotalItemsInCart()}</span>
            </span>
        </>
    );
}

export default CartWidget;
