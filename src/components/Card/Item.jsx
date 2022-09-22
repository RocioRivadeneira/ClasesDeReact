import React from "react";
import "./card.css";
import ItemCount from "../ItemCount/Count";

function Item(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.detail} </p>
                <a href="#" className="vermas">
                    <p>Ver detalles del producto</p>
                </a>
                <h4 className="card-price">${props.price}</h4>

                <strong>Stock Disponible: {props.stock}</strong>
                <ItemCount initial={1} stockLimit={props.stock} />
            </div>
        </div>
    );
}

export default Item;
