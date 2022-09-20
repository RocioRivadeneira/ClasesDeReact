import React from "react";
import "./NavBar/navbar.css";
import "./Card/card.css";
import Card from "./Card/Card";

function ItemListContainer({ greeting }) {
    return (
        <>
            <h2 className="titulo"> {greeting} </h2>
            <div className="main container">
                <Card
                    price={100}
                    title="Producto 1"
                    detail="Lorem ipsumifvjrnfvjenrkvjbkjdvskndvkjsnvrndvjervbh"
                    img="/assets/images/logo.png"
                />
                <Card
                    price={500}
                    title="Otro Producto"
                    detail="Lorem ipsum Lorem ipsumifvjrnfvjenrkvjbkjdvskndvkjsnvrndvjervbh"
                    img="/assets/images/logo.png"
                />
                <Card
                    price={1000}
                    title="Otro Producto más!"
                    detail="Lorem ipsum Lorem ipsumifvjrnfvjenrkvjbkjdvskndvkjsnvrndvjervbh"
                    img="/assets/images/logo.png"
                />
            </div>
        </>
    );
}

export default ItemListContainer;
