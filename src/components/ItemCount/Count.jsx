import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./count.css";

const ItemCount = ({ defaultQuantity = 1, stockLimit, onAddToCart }) => {
    const [quantity, setQuantity] = useState(defaultQuantity);

    const incrementoContador = () => {
        if (quantity < stockLimit) {
            setQuantity(quantity + 1);
        }
    };

    const decrementoContador = () => {
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
                <button
                    className="carrito"
                    onClick={() => onAddToCart(quantity)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
