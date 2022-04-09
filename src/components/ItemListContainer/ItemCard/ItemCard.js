import React from "react";
import ItemCount from "../ItemCount";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ItemCard = ({ data }) => {

    const { price, image, id, stock } = data

    const navigate = useNavigate()

    const chengePage = () => {
        navigate(`/item/${id}`)
    }

    const addToCart = (e) => {
        e.stopPropagation()
        console.log("agregado al carrti: ")
    }

    const onAdd = (add) => {
        console.log(`Cantidad de productos agregados: ${add} `)
    }

    return (

        <>
            
                
                <div className="card-item-dos" onClick={chengePage}>
                    <div className="container__box">
                           
                        <div className="box">
                            <img src= {image} alt="..." />
                            <h4> Precio: ${price} </h4>
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} addToCart={addToCart}/>
                        </div>
                           
                    </div>
                </div>
           
        </>
    )

}

export default ItemCard;