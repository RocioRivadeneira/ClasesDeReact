import React, { useState } from "react";
import { Link } from "react-router-dom";

import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/Count";
import Button from "../Button/Button";

import "./item.css";

function ItemDetail({ img, title, detail, price, stock }) {
    let [cartState, setCartState] = useState(false);

    function handleAddToCart() {
        setCartState(true);
    }

    return (
        <FlexWrapper rows={true}>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{detail} </p>
                    <h4 className="card-price">${price}</h4>

                    <strong>Stock Disponible: {stock}</strong>
                    {!cartState ? (
                        <ItemCount
                            stockLimit={stock}
                            onAddToCart={handleAddToCart}
                        />
                    ) : (
                        <Link to="/cart">
                            <Button>Finalizar Compra</Button>
                        </Link>
                    )}
                </div>
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;
