import React from "react";
import "./card.css";
import ItemCount from "../ItemCount/Count";

function Card(props) {
    return (
        <main className="container productos">
            <div class="card">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.detail}</p>
                    <h4 class="card-price">${props.price}</h4>
                    
                    <ItemCount />
                </div>
            </div>
        </main>
    );
}

export default Card;
