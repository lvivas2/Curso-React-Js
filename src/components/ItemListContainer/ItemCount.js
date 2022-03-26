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
                <input value={add} class=" m-2 " />
                <button onClick={removeProduct} class="btn btn-outline-light btn-sm m-2"><i class="bi bi-dash-square"></i></button>
                <button onClick={addProduct} class="btn btn-outline-light btn-sm m-2"><i class="bi bi-plus-square"></i></button>
            </div>
            <button onClick={() => { onAdd(add) }} type="button" class="btn btn-outline-light mt-2"> Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;