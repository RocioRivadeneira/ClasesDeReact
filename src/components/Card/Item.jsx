import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

function Item(props) {
    return (
        <div className="card">
            <button onClick={props.onClickImagen}>
                <img src={props.img} className="card-img-top img-trum" alt="..." />
            </button>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.detail} </p>

                <h4 className="card-price">${props.price}</h4>

                <h6>Stock Disponible: {props.stock}</h6>

                <Link to={`/detail/${props.id}`} className="vermas">
                    Ver detalles del producto
                </Link>
            </div>
        </div>
    );
}

export default Item;
