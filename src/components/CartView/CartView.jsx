import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/Count";

import "./cartView.css";

function CartView() {
    const { cart, addItem, removeItem } = useContext(cartCtx);

    if (!cart.length) {
        return (
            <div className="text-center my-2 h4">
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
        <>
            <h2 className="titulo">Tu Carrito</h2>

            <table className="table table-hover cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th className="w-25">Detalles</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {cart.map((item) => {
                        return (
                            <tr key={item.id} className="cartList_row">
                                <td>
                                    <img
                                        className="image-table"
                                        height={120}
                                        width={120}
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.detail}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <ItemCount
                                        className="edit"
                                        defaultQuantity={item.quantity}
                                        stockLimit={item.stock}
                                        onAddToCart={handleAddToCart(item)}
                                    />
                                </td>
                                <td>
                                    <Button onClick={() => removeItem(item)}>
                                        <strong className="eliminar">X</strong>
                                    </Button>
                                </td>
                                <th>$ {item.price * item.quantity}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h5 className="text-secondary text-center">
                El total de tu compra es de ${obtenerTotal(cart)}
            </h5>
            <h4 className="text-center">
                Para finalizar la compra llene el siguiente formulario:
            </h4>
            <CheckoutForm />
        </>
    );
}
export default CartView;
