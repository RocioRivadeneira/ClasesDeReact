import React from "react";

import ItemCount from "../ItemCount/Count";

import "./item.css";

function ItemDetail({ img, title, detail, price, stock }) {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{detail} </p>
                <h4 className="card-price">${price}</h4>

                <strong>Stock Disponible: {stock}</strong>
                <ItemCount initial={1} stockLimit={stock} />
            </div>
        </div>
    );
}

export default ItemDetail;
