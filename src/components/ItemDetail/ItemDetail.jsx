import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/Count";

import "./item.css";

function ItemDetail(item) {
    const { addItem } = useContext(cartCtx);

    function handleAddToCart(quantity) {
        addItem(item, quantity);
    }

    return (
        <FlexWrapper rows={true}>
            <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.detail} </p>
                    <h4 className="card-price">${item.price}</h4>
                    <strong>Stock Disponible: {item.stock}</strong>
                    <ItemCount stock={5} onAddToCart={handleAddToCart} />
                </div>
            </div>
        </FlexWrapper>
    );
}

export default ItemDetail;
