import React, { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../Contex/CartContex";
import FaceIcon from '@mui/icons-material/Face';
import CircularProgress from '@mui/material/CircularProgress';
import SwipeableTemporaryDrawer from "../../NavBar/CartWidget/CartWidget";

const ItemCard = ({ data }) => {

    const { price, image, id, titel, stock, quantity } = data
    const { cartProducts, addProductToCart, btnAdd, setBtnAdd } = useContext(CartContext)
    const [loadingCard, setLoadingCard] = useState(true)
    const [btnAddCard, setBtnAddCard] = useState(stock)



    setTimeout(()=>{
        setLoadingCard(false)
    }, 1000)

    console.log("btnAddCard Stock: ", btnAddCard)
    // const Same = () =>{
    //     if (cartProducts.)
    // }
    const addToCart = (e) => {
        e.stopPropagation()
        addProductToCart({ ...data, quantity: 1 })
    }



    const same = cartProducts.map((cartProduct) => {

        const delateStock = () => {
            console.log("cartProduct: ", cartProduct.id, cartProduct.stock)

        }

        delateStock()

    })


    const addCardCart = () => {
        if (btnAddCard >= 1) {
            console.log("Si es mayor")
            setBtnAdd(btnAddCard)
        }
    }






    const navigate = useNavigate()
    const chengePage = () => {
        navigate(`/item/${id}`)
    }




    return (

        <>

            {/* <button onClick={addOn} className="btn-card-cart">suma</button>  */}

            <div className="card-item" onClick={chengePage}>
                <div className="container-img">
                    {
                        loadingCard ?
                            <div className="loading-item-card">

                                <CircularProgress />

                            </div>
                            :

                            <img src={image} alt="..." />
                    }
                </div>

                <div className="container-card">
                    <div className="detail-card">
                        <h4>{titel}</h4>
                        <h4>${price}</h4>
                    </div>
                    <div className="btn-container-card">

                        <button onClick={addToCart} className="btn-card-cart">Agregar al carrito</button>

                        <button onClick={chengePage} className="btn-card-view">Ver detalle <i className="bi bi-eye-fill"></i> </button>
                    </div>
                </div>

            </div>


        </>
    )

}

export default ItemCard;