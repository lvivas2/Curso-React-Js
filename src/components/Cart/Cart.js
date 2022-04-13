import React from "react";
import CartContext from "../../Contex/CartContex";
const Cart = ( () => {

    const { cartProducts, deleteOne } = useContext(CartContext)
    return (
        <>
        <h2> Hola Mundo </h2>
        <br/>
        <button>eliminar productos</button>


        <>
            
              {
                  cartProducts.map((prod))
              }  
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
        </>
    )
})

export default Cart