import React, { useContext, useState } from "react";
import CartContext from "../../Contex/CartContex";
import ModalCustom from "../Modal/Modal";
import { Link } from "react-router-dom";

// Form MUI

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const Cart = (() => {
    
    const { cartProducts, deleteOne, clear, total } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [buy, setBuy] = useState(

        {
            buyer:{
                name:"",
                phone:"",
                email:""
            },
            items: cartProducts.map((cartProducts)=> {
                return{
                    id: cartProducts.id,
                    titel: cartProducts.titel,
                    price: cartProducts.price,
                }
            }),
            total: total()
        }
    )

    console.log("buy", buy)

    console.log("cartProducts: ", cartProducts)

    
    const addBuy = () =>{
        setOpenModal(true)

    }

    return (
        <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div className="container-page-cart">


                <div className="card-items-total">


                    <div className="container-products-cart">

                        {
                            (cartProducts.length === 0)
                            &&
                            <div>
                                <p>No hay productos agregados en el carrito...</p>
                                <Link to='/'>
                                    <button>
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
                           

                            

                            <button className="btn-clear" onClick={() => clear()}>Vaciar carrito</button>
                           
                            </>
                        }
                        
                    </div>
                </div>
                    
                <div className="data-toContact">
                        <h2>Datos de contacto</h2>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Mail"
                            defaultValue=""
                        />
                        <h2>Entrega</h2>
                        <TextField 
                        id="outlined-search" 
                        label="País" 
                        type="search" />
                       
                        <TextField 
                        id="outlined-search" 
                        label="Ciudad" 
                        type="search" />

                         <TextField 
                        id="outlined-search" 
                        label="Codigo postal" 
                        type="search" />

                       
                    </div>
                </div>

            </div>
        </Box>
                  
        <button className="btn-buy" onClick={addBuy}>Finalizar Compra</button>
                        <ModalCustom handleCloses={() => setOpenModal(false)} open={openModal}>
                            <h2>
                                Formulario
                            </h2>
                        </ModalCustom>

                        
                        </>
    )
})

export default Cart