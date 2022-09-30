import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./count.css";

const ItemCount = ({ stockLimit }) => {
    /* Se inicializa el contador en 0 */
    const [contador, setContador] = useState(0);

    /* funcion para incrementar el contador*/
    const incrementoContador = () => {
        /* utilizo el estado ya declarado setContador para incrementar la cantidad*/
        if (contador < stockLimit) {
            setContador(contador + 1);
        }
    };

    const decrementoContador = () => {
        /* Utilizo el estado ya declarado para decrementar la cantidad */
        if (contador >= 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="contenedorPadre">
            {/* Aca llamo al contador para mostrar el cambio de estado, nose si esta bien dicho(? 
					pero  te va mostrando como aumenta o disminuye */}
            <div className="buttons">
                <div className="box">
                    <button
                        className="descontar"
                        onClick={decrementoContador}
                        disabled={contador === 0}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input className="contador" value={contador} readOnly />
                    <button
                        className="agregar"
                        onClick={incrementoContador}
                        disabled={contador === stockLimit}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <button className="carrito"> Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
