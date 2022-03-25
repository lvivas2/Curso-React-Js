import React from "react";
import ItemCard from "./ItemCard/ItemCard";



const ItemListContainer = (props) => {
    const { titel } = props

    let dataProduct = {
        titel: "Buso",
        waist: "S",
        stock: 14
    }
 

    return (
        <div>
            <h1 className="Titel-GYO">
                {titel}
            </h1>

        <ItemCard data={dataProduct}/>
        </div>
    )
}

export default ItemListContainer;