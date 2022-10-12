import React, { useContext, useState } from "react";
import { cartCtx } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/Count";
import { Link } from "react-router-dom";

import "./item.css";

function ItemDetail(item) {
    const [isInCart, setIsInCart] = useState(false);
    const { addItem, removeItem } = useContext(cartCtx);

    function handleAddToCart(quantity) {
        addItem(item, quantity);
    }

    function handleItemDelete() {
        removeItem(item);
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

                        {isInCart ? (
                            <Link to="/cart">Ir al carrito</Link>
                        ) : (
                            <ItemCount
                                stockLimit={item.stock}
                                onAddToCart={handleAddToCart}
                            />
                        )}

                        <button
                            type="button"
                            className="btn btn-link text-decoration-none mt-2"
                            onClick={handleItemDelete}
                        >
                            Quitar del carrito
                        </button>
                    </div>
                </div>
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;
