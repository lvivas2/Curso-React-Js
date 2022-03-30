import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

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

    return (
        <div className="container-count">
            <div>
                <button onClick={removeProduct}><i class="bi bi-dash-square"></i></button>
                <input value={add}/>
                <button onClick={addProduct}><i class="bi bi-plus-square"></i></button>
            </div>
            <button onClick={() => { onAdd(add) }} type="button"> Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;