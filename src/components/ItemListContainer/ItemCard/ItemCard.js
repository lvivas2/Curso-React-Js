import React from "react";
import ItemCount from "../ItemCount";

const ItemCard = ({data}) => {

    const {titel, waist, stock} = data

    return (


        <div className="card" class="card">
            <img src="buso.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"> {titel} </h5>
                <p class="card-text"> Talla: {waist} </p>
                <p class="card-text"> Stock: {stock} </p>
            </div>

            <ItemCount stock={stock}/>
        </div>
    )

}

export default ItemCard;