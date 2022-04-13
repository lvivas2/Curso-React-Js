import React, {useContext, useEffect} from "react";
import ItemCount from "../ItemCount";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CartContext from "../../../Contex/CartContex";


const ItemCard = ({ data }) => {

    const { cartProducts, addProductToCart } = useContext (CartContext)


    const addToCart = (e) => {
        e.stopPropagation()
        console.log("productos agregados: ", cartProducts)
        addProductToCart(data)
    }

    const { price, image, id, titel, stock } = data
    const navigate = useNavigate()
    const chengePage = () => {
        navigate(`/item/${id}`)
    }


    // const onAdd = (add) => {
    //     console.log(`Cantidad de productos agregados: ${add} `)
    // }

    return (

        <>
            
                
                <div className="card-item-dos" onClick={chengePage}>
                    <div className="container__box">
                           
                        <div className="box">
                            <img src= {image} alt="..." />

                            <button onClick={addToCart}>Comprar</button>
                            {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} addToCart={addToCart}/> */}
                        <div className="detail-card">
                            <h4>{titel}</h4>
                            <h4>${price}</h4>

                        </div>
                        </div>
                           
                    </div>
                </div>
           
        </>
    )

}

export default ItemCard;