import React, { useContext, useState } from "react";
import CartContext from "../../Contex/CartContex";
import ModalCustom from "../Modal/Modal";
import { Link, useNavigate } from "react-router-dom";

import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore"






const Cart = (() => {

    const { cartProducts, deleteOne, clear, total } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [boyOrder, setBuyOrder] = useState()
    const [formData, setFormData] = useState({

        name: "",
        phone: "",
        email: ""
    })
    const [buy, setBuy] = useState(

        {
            buyer: formData,
            items: cartProducts.map((cartProducts) => {
                return {
                    id: cartProducts.id,
                    titel: cartProducts.titel,
                    price: cartProducts.price,
                }
            }),
            total: total()
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {
            ...buy,
            buyer: formData
        }
        setBuy({
            ...buy,
            buyer: formData
        })
        pushOrder(prevOrder)

    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, "Ordenes")
        const order = await addDoc(orderFirebase, prevOrder)
        console.log("Orden", order.id)
        setBuyOrder(order.id)
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }


 const navigate = useNavigate()





return (

        <>

            <div className="container-page-cart">


                <div className="card-items-total">


                    <div className="container-products-cart">

                        {
                            (cartProducts.length === 0)
                            &&
                            <div>
                                <p>No hay productos agregados en el carrito...</p>
                                <Link to='/'>
                                    <button className="btn-view-products">
                                        Ver productos
                                    </button>
                                </Link>
                            </div>
                        }

                        {

                            cartProducts.map((prod) => (

                                <div className="container-cart" key={prod.id}>
                                    <div className="cart-item-img">
                                        <img src={`./${prod.image}`} alt="..." />
                                    </div>
                                    <div className="cart-item-info">
                                        <p className="prod-info">{prod.titel} x {prod.quantity} </p>
                                        <p className="prod-price">${prod.price} </p>
                                    </div>
                                </div>


                            ))

                        }


                    </div>
                    <div className="container-btnClear-total">
                        {
                            (cartProducts.length >= 1)

                            &&

                            <div>
                                <h3>Total:</h3>
                                <h2>{total()}</h2>
                            </div>
                        }

                        {
                            (cartProducts.length >= 1)

                            &&
                            <>

                                <button className="btn-buy" onClick={() => setOpenModal(true)}>Finalizar Compra</button>
                                <button className="btn-clear" onClick={() => clear()}>Vaciar carrito</button>

                            </>
                        }

                    </div>
                </div>



            </div>

            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                {boyOrder ? (
                    <>
                        <h3>Orden generada correctamente</h3>
                        <h3>Su número de orden es {boyOrder}</h3>
                        <button onClick={() => navigate("/")}>Aceptar</button>
                    
                    </>
                ) : (

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={formData.name} />
                        <input type="number" name="phone" placeholder="Telefono" onChange={handleChange} value={formData.phone} />
                        <input type="email" name="email" placeholder="Mail" onChange={handleChange} value={formData.email} />

                        <button type="submit">Enviar</button>
                    </form>


                )}



            </ModalCustom>





        </>
    )
})

export default Cart