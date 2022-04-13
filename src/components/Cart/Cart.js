import React, {useContext} from "react";
import CartContext from "../../Contex/CartContex";
const Cart = (() => {

    const { cartProducts, deleteOne } = useContext(CartContext)


    
    return (
        <>
            <h2> Hola Mundo </h2>
            <br />

                {
                    
                    cartProducts.map((prod) => ( 
                    
                        <div className="card-item-dos" key = {prod.id}>
                            <div className="container__box">

                                <div className="box">
                                    <img src={prod.image} alt="..." />

                                    <button onClick={() => deleteOne (prod.id)}>eliminar</button>
                                    {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} addToCart={addToCart}/> */}
                                    <div className="detail-card">
                                        <h4>{prod.titel}</h4>
                                        <h4>${prod.price}</h4>

                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    ))

                }     
        </>
    )
})

export default Cart