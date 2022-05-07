
import React, { useContext, useState } from "react";
import CartContext from "../../../Contex/CartContex";

const Count = ({stock, countQuantity}) => {

    const handleChange = (e) => { }
const [countAdd, setConuntAdd] = useState(1);
  


console.log("stockCount: ", stock, countQuantity)
   

    const CountAddProduct = () => {
        if (countAdd < stock) {
            setConuntAdd(countAdd + 1)
        }else{
            console.log("Ya no se pueden agregar productos")
        }

    }

    const CountRemoveProduct = () => {
        if (countAdd > 1) {
            setConuntAdd(countAdd - 1)
        }else{
            console.log("¿Desea eliminar el producto del carrito?")
        }
    }

    const addCount = () =>{
        console.log("hola")
        countQuantity(countAdd)
    }

    
    


    return (
        <>

            <div className="container-count-widget">
                <div>
                    <div className="container-input-btn">
                        <button className="button-item-count-widget" onClick={() => CountRemoveProduct()}><i className="bi bi-dash-square"></i></button>
                        <input  value={countAdd} onChange={handleChange}  />
                        <button className="button-item-count-widget" onClick={() => CountAddProduct()} ><i className="bi bi-plus-square"></i></button>
                    </div>

                        <button onClick={()=> addCount()} className="btnAdd-count">Añadir al carrito</button>
                </div>
            </div>

        </>

    )
}

export default Count