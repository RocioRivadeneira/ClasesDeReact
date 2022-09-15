import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
    return (
        <>
            <span classId="carrito">
                <FontAwesomeIcon icon={faCartShopping} />
            </span>
        </>
    );
}

export default CartWidget;
