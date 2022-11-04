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
            icon: "success",
            title: `Agregaste "${item.title}" a tu carrito.`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Finalizar compra",
            cancelButtonText: `Seguir comprando`,
            allowOutsideClick: false,
        });

        navigate(isConfirmed ? "/cart" : `/`);
    }

    return (
        <FlexWrapper>
            <div className="card-detail">
                <div className="row">
                    <div className="col-md-4 ">
                        <img
                            src={item.img}
                            className="img-item img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-detail">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.detail} </p>
                            <h4 className="card-price">$ {item.price}</h4>
                            <p className="card-text text-muted">
                                Stock Disponible: {item.stock}
                            </p>
                            <ItemCount
                                stockLimit={item.stock}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;
