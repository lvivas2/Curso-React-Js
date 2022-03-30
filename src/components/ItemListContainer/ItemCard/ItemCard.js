import React from "react";
import ItemCount from "../ItemCount";

const ItemCard = ({ data }) => {

    const { titel, waist, price, stock, image } = data

    const onAdd = (add) => {
        console.log(`Cantidad de productos agregados: ${add} `)
    }

    return (


        <div className="body-page">

            <div className="container-card">
                <div className="card-item c1">
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    <div className="info-description">
                        <p> Precio: {price} </p>
                        <p> Talle: {waist} </p>
                        <p> Stock: {stock} </p>
                        {/* <p>Descripción: */}
                        {/* Desde clásicos suéteres de cuello V hasta jerséis con mensajes actuales, nuestra nueva colección de jerséis ha llegado para aportar un extra de calidez a todos tus looks. Elige una sudadera oversize con un estampado llamativo o apuesta por un atemporal jersey de ochos o de rayas en color camel, azul marino o gris. Cómpralo online y hazte con tu estilo.</p> */}
                        {/* <input type={"button"} value="Leer Más"></input> */}
                    </div>
                    <div className="icon">
                        <img src={`./${image}`} alt="..." />
                        <h3>{titel}</h3>
                    </div>
                </div>
{/* 
                <div className="card-item c2">
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    <div className="info-description">
                        <p> Precio: {price} </p>
                        <p> Talle: {waist} </p>
                        <p> Stock: {stock} </p>
                        <input type={"button"} value="Leer Más"></input>
                    </div>
                    <div className="icon">
                        <i class="bi bi-filetype-css"></i>
                    </div>
                </div> */}

                {/* <div className="card-item c3">
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    <div className="info-description">
                        <p> Precio: {price} </p>
                        <p> Talle: {waist} </p>
                        <p> Stock: {stock} </p>
                        <input type={"button"} value="Leer Más"></input>
                    </div>
                    <div className="icon">
                        <i class="bi bi-filetype-jsx"></i>
                    </div>
                </div> */}
            </div>


        </div>
    )

}

export default ItemCard;