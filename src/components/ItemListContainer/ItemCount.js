import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, addToCart, componentRemove }) => {

    const handleChange = (e) => { }

    const [add, setAdd] = useState(initial);

    const addProduct = () => {
        if (add < stock) {
            setAdd(add + 1)
        }

    }

    const removeProduct = () => {
        if (add > 1) {
            setAdd(add - 1)
        }
    }

    function allOnClick(){
        funtiontwo()
        funtionOne()
    }
    function funtionOne(){
        onAdd(add)
    }
    function funtiontwo(){
        componentRemove ()
    }
   

    return (

        <>
            <div className="container-count">
                <div onClick={addToCart}>
                    <button className="button-item-count" onClick={removeProduct}><i className="bi bi-dash-square"></i></button>
                    <input value={add} onChange={handleChange} />
                    <button className="button-item-count" onClick={addProduct}><i className="bi bi-plus-square"></i></button>
                    <button className="button-item-count" onClick={ ( () => {allOnClick() })  } type="button" > Añadir al carrito</button>
                </div>
            </div>

         

        </>

    )
}

export default ItemCount;