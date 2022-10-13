import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import ItemCount from "../ItemCount/Count";

import "./cartView.css";

function CartView() {
    const { cart, addItem, removeItem } = useContext(cartCtx);

    if (!cart.length) {
        return (
            <div class="text-center my-2 h4">
                Tu carrito está vacio...
                <Link to="/">Ver productos</Link>{" "}
            </div>
        );
    }

    function handleAddToCart(item) {
        return (quantity) => {
            addItem(item, quantity);
        };
    }
    function obtenerTotal(cart) {
        return Object.values(cart).reduce(
            (total, { price, quantity }) => (total += price * quantity),
            0
        );
    }

    return (
        <div>
            <div>
                <table className="text-center">
                    <tr>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th className="w-25">Detalles</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Total</th>
                    </tr>
                    {cart.map((item) => (
                        <tr>
                            <td>
                                <img
                                    className="img"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.detail}</td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <ItemCount
                                    stockLimit={item.stock}
                                    onAddToCart={handleAddToCart(item)}
                                />
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link text-decoration-none mt-2"
                                    onClick={() => removeItem(item)}
                                >
                                    X
                                </button>
                            </td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <h4 className="text-center">
                Total a pagar: ${obtenerTotal(cart)}
            </h4>
        </div>
    );
}

export default CartView;
