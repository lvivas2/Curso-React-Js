import React from "react";
import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({ productos = [] }) => {

    console.log(productos)

    return (
        <>
            {productos.map((producto) => {
                return(<ItemCard data={producto} key={producto.id}/>)
                    
                
            })}



        </>

    )
}

export default ItemList;