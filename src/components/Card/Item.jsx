import React from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/Count";

import "./card.css";

function Item(props) {
    return (
        <div className="card">
            <div onClick={props.onClickImagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.detail} </p>

                <Link to={`/detail/${props.id}`} className="vermas">
                    Ver detalles del producto
                </Link>
                
                <h4 className="card-price">${props.price}</h4>

                <strong>Stock Disponible: {props.stock}</strong>
                <ItemCount initial={1} stockLimit={props.stock} />
            </div>
        </div>
    );
}

export default Item;
