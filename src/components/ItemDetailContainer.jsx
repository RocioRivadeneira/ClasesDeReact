import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailConteiner() {
    let [item, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id).then(setData);
    }, [id]);

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail
                key={item.id}
                id={item.id}
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
