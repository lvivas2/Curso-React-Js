import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ productos = [] , loading} ) => {

    return (
        <>
            {productos.map((producto) => {
                return (
                    <div className="container-itemcard">
                        <ItemCard data={producto} key={producto.id} loading={loading}/>
                    </div>
                )


            })}



        </>

    )
}

export default ItemList;