import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import "./count.css";

const ItemCount = ({ stockLimit, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementoContador = () => {
        /* utilizo el estado ya declarado setQuantity para incrementar la cantidad*/
        if (quantity < stockLimit) {
            setQuantity(quantity + 1);
        }
    };

    const decrementoContador = () => {
        /* Utilizo el estado ya declarado para decrementar la cantidad */
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="contenedorPadre">
            <div className="buttons">
                <div className="box">
                    <button
                        className="descontar"
                        onClick={decrementoContador}
                        disabled={quantity === 1}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input className="contador" value={quantity} readOnly />
                    <button
                        className="agregar"
                        onClick={incrementoContador}
                        disabled={quantity === stockLimit}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <Link
                    to="/cart"
                    className="carrito"
                    onClick={() => onAddToCart(quantity)}
                >
                    Agregar al carrito
                </Link>
            </div>
        </div>
    );
};

export default ItemCount;
