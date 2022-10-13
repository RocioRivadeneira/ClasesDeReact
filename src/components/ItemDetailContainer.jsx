import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../data/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";
import { DotSpinner } from "@uiball/loaders";

function ItemDetailConteiner() {
    const [item, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(setData)
            .catch(setError)
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) {
        return <DotSpinner size={50} speed={0.9} color="black" />;
    }

    return error ? (
        <div>
            <h2>Error obteniendo los datos</h2>
            <p>{error}</p>
        </div>
    ) : (
        <div className="d-flex justify-content-center">
            <ItemDetail
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                detail={item.detail}
                category={item.category}
                price={item.price}
                stock={item.stock}
            />
        </div>
    );
}

export default ItemDetailConteiner;
