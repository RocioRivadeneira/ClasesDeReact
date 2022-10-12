import React, { useContext, useState } from "react";
import { cartCtx } from "../../context/cartContext";
import ItemCount from "../ItemCount/Count";

import "./cartView.css";

function CartView() {
    const [setIsInCart] = useState(false);
    const { cart, addItem, removeItem } = useContext(cartCtx);

    let carritovacio = false;

    if (carritovacio) {
        return <div>Tu carrito está vacio...</div>;
    }

    function handleAddToCart(item) {
        return (quantity) => {
            addItem(item, quantity);
            setIsInCart(true);
        };
    }

    return (
        <div>
            {cart.map((item) => (
                <div>
                    <table className="table text-center">
                        <tr>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Detalles</th>
                            <th>Precio</th>
                            <th>Unidades</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                            <th>Cantidad</th>
                        </tr>
                        <tr>
                            <td>
                                <img className="img"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.detail}</td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link text-decoration-none mt-2"
                                    onClick={() => removeItem(item)}
                                >
                                    Eliminar
                                </button>
                            </td>
                            <td>
                                <ItemCount
                                    stockLimit={item.stock}
                                    onAddToCart={handleAddToCart(item)}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default CartView;
