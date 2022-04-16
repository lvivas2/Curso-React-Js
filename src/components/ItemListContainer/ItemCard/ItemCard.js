import React, { useContext, useEffect } from "react";
import ItemCount from "../ItemCount";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CartContext from "../../../Contex/CartContex";
import FaceIcon from '@mui/icons-material/Face';


const ItemCard = ({ data }) => {

    const { cartProducts, addProductToCart } = useContext(CartContext)


    const addToCart = (e) => {
        e.stopPropagation()
        console.log("productos agregados: ", cartProducts)
        addProductToCart({ ...data, quantity: 1 })
        console.log("producto sumado: ", addProductToCart)
    }

    const { price, image, id, titel, stock } = data
    const navigate = useNavigate()
    const chengePage = () => {
        navigate(`/item/${id}`)
    }


    return (

        <>
            <div className="card-item-dos" onClick={chengePage}>
                <div className="container__box">
                    <div className="box">
                        <img src={image} alt="..." />
                        <div className="detail-card">
                            <h4>{titel}</h4>
                            <h4>${price}</h4>
                        </div>
                        <div className="btn-container-card">
                        <button onClick={addToCart} className="btn-card-cart">Agregar al carrito</button>
                        <button onClick={chengePage} className="btn-card-view">Ver detalle <i class="bi bi-eye-fill"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemCard;