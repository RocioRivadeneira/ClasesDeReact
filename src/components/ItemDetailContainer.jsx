import React, { useState, useEffect } from "react";
import { getItem } from "../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailConteiner() {
    let [item, setItem] = useState({});

    useEffect(() => {
        getItem(1).then(setItem);
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail
                img={item.img}
                title={item.title}
                detail={item.detail}
                price={item.price}
                stock={item.stock}
            />
        </div>
    );
}

export default ItemDetailConteiner;
