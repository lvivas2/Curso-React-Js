import React, {useContext} from "react";
import CartContext from "../../Contex/CartContex";
import { Link } from "react-router-dom";



const Cart = (() => {

    const { cartProducts, deleteOne, clear, total } = useContext(CartContext)


    
    return (
        <>
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
                    
                        <div className="card-item-dos" key = {prod.id}>
                            <div className="container__box">

                                <div className="box">
                                    <img src={prod.image} alt="..." />
                                    <button onClick={() => deleteOne (prod.id)}>eliminar</button>
                                    <div className="detail-card">
                                        <h4>{prod.titel}</h4>
                                        <h4>${prod.price}</h4>
                                        <h4>Productos agregados: {prod.quantity}</h4>

                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    ))

                }  



                 {
                     (cartProducts.length >= 1)

                     &&

                 <button onClick={() => clear()}>Vaciar carrito</button>   
                 }   

                 {
                     (cartProducts.length >= 1)

                     &&

                     <div>
                         <h3>Total: {total()}</h3>
                     </div>
                 }
        </>
    )
})

export default Cart