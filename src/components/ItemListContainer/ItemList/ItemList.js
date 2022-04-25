import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ productos = [] }) => {

    return (
        <>
            {productos.map((producto) => {
                return (
                    <div className="container-itemcard">
                        <ItemCard data={producto} key={producto.id} />
                    </div>
                )


            })}



        </>

    )
}

export default ItemList;