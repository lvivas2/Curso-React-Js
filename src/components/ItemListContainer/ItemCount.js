import React, { useState } from "react";

const ItemCount = ({ stock }) => {

    const [add, setAdd] = useState(1);



    const subProduct = () => {
        if (add < stock) {
            setAdd(add + 1)
        }

    }

    const subtProduct = () => {
        if (add > 1) {
            setAdd(add - 1)
        }

    }

  alert ("Haz seleccionado" )


    return (
        <div className="container-count">
            <h2>
                {add}
            </h2>
            <div className="count-addMinus">
                <p>cantidad</p>

                <button onClick={subtProduct} type="button" class="btn btn-outline-light btn-sm ">
                    <i class="bi bi-dash-square"></i>
                </button>

                <button onClick={subProduct} type="button" class="btn btn-outline-light btn-sm offset-md-3">
                    <i class="bi bi-plus-square"></i>
                </button>

                <button type="button" class="btn btn-outline-light mt-2"> Añadir al carrito
            </button>

            </div>
        </div>
    )
}

export default ItemCount;