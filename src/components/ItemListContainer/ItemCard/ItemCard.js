import React from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {

    const { price, image, id, categoryId } = data

  

    const onAdd = (add) => {
        console.log(`Cantidad de productos agregados: ${add} `)
    }

    return (

        <>
            <div className="card-item-flex" >
                
                <div className="card-item-dos">
                    <div className="container__box">
                           <Link to={`/item/${id}`}>
                        <div className="box">
                           
                            <img src= {image} alt="..." />
                           
                            <h4> Precio: ${price} </h4>
                        </div>
                           </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemCard;