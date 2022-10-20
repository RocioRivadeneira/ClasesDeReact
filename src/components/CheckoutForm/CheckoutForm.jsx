import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../../data/firestore";

import "./CheckoutForm.css";

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const navigate = useNavigate();
    const context = useContext(cartCtx);
    const { cart, getTotalPriceInCart } = context;

    function handleCheckout(event) {
        event.preventDefault();
        /* { buyer: { name, phone, email }, items: [{id, title, price}], total  } */
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getTotalPriceInCart(),
        };
        createBuyOrder(orderData).then((orderid) => {
            navigate(`/checkout/${orderid}`);
        });
    }

    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }

    return (
        <div className="form-container border border-success mb-3">
            <form className="mt-2 mb-2"onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input
                        className="w-50"
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre y Apellido"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        className="w-50"
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-50"
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>
                <strong><Link to={"/checkout/:orderid"}  className="end mb-3" type="submit">Finalizar Compra</Link></strong>
            </form>
        </div>
    );
}

export default CheckoutForm;
