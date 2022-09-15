import React from "react";
import "./NavBar/navbar.css";

function ItemListContainer({ greeting }) {
    return (
        <>
        <main>
            <h1 className="titulo"> {greeting} </h1>
            </main>
        </>
    );
}

export default ItemListContainer;
