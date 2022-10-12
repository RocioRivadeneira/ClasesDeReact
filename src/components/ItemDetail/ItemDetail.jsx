import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { cartCtx } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/Count";

import "./item.css";

function ItemDetail(item) {
    const { addItem } = useContext(cartCtx);
    const navigate = useNavigate();

    async function handleAddToCart(quantity) {
        addItem(item, quantity);

        const { isConfirmed = false } = await Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Agregaste "${item.title}" a tu carrito.`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Finalizar compra",
            cancelButtonText: `Seguir comprando`,
            allowOutsideClick: false,
        });

        navigate(isConfirmed ? "/cart" : `/categoria/${item.category}`);
    }

    return (
        <FlexWrapper rows={true}>
            <div className="container">
                <div className="card">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.detail} </p>
                        <h4 className="card-price">$ {item.price}</h4>
                        <strong>Stock Disponible: {item.stock}</strong>

                        <ItemCount
                            stockLimit={item.stock}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;
