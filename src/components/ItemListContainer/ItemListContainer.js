import React from "react";


const ItemListContainer = (props) => {
    const {titel} = props
    return(
        <div>
            <h1 className="Titel-GYO">
                {titel}
            </h1>
        </div>
    )
}

export default ItemListContainer;