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
                Tu carrito está vacio... <Link to="/">Ver productos</Link>{" "}
            </div>
        );
    }

    function handleAddToCart(item) {
        return (quantity) => {
            addItem(item, quantity);
        };
    }

    return (
        <div>
            {cart.map((item) => (
                <div>
                    <table className="text-center">
                        <tr>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Detalles</th>
                            <th>Precio</th>
                            <th>Unidades</th>
                            <th>Cantidad</th>
                            <th>Eliminar</th>
                            <th>Total</th>
                        </tr>
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
                    </table>
                </div>
            ))}
        </div>
    );
}

export default CartView;
