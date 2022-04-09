import ItemCount from "../ItemListContainer/ItemCount";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast, faArrowRotateLeft, faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

// Rutas





const ItemDetail = ({ details }) => {
    const [produtToBuy, setProductToBuy] = useState({})

    console.log("producto almacenado en el carrito: ", produtToBuy)

    const { titel, waistS, waistM, waistXL, price, stock, image, imageTow, imageThree, id, category } = details

    const addToCart = (e) => {
        e.stopPropagation()

    }

    const onAdd = (add) => {
        return setProductToBuy(add)

    }

    const removeComponent = (() => {

        if (produtToBuy >= 1) {
            const component = document.getElementsByClassName("buttonCount-detail")
            while (component.length > 0) {

                component[0].parentNode.removeChild(component[0]);
            }

            const addButtonCart = document.getElementsByClassName("button-ToCart")

            addButtonCart[0].style.display = "block"

        }

    })

    const cartUpdated = (() => {
        console.log("carrito actualizado: ", produtToBuy)
    })
    return (
        <>
            <div className="container-detail-grid">

                <div className="detail-grid-item" >

                    <div className="detail-item" >

                        <img src={image} alt="..." />

                    </div>

                </div>

                <div className="detail-grid-item">

                    <div className="detail-product">
                        <p className="detail-category"><Link to={`/category/${category}`}>{category} {" "}</Link>/ Training</p>
                        <h2>
                            {titel}
                        </h2>
                        <p className="detail-price">${price}</p>
                        <p className="detail-price">En stock: {stock}</p>
                        <h3>Talles disponibles</h3>
                        <table>
                            <tbody>

                                <tr>
                                    <td>{waistS}</td>
                                </tr>
                                <tr>
                                    <td>{waistM}</td>
                                </tr>
                                <tr>
                                    <td>{waistXL}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="buttonCount-detail">
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} addToCart={addToCart} componentRemove={removeComponent} />
                        </div>
                        <div className="button-ToCart">

                            <Link to={"/Cart"}> <button onClick={cartUpdated} className="button-addCart" >Finalizar compra</button> </Link>
                        </div>

                    </div>

                    <div className="info-detail">
                        <ul>
                            <li>
                                <a><FontAwesomeIcon icon={faTruckFast} /> ENVÍOS GRATIS A NIVEL NACIONAL ¡SOLO PARA MIEMBROS! </a>
                            </li>
                            <li>
                                <a> <FontAwesomeIcon icon={faArrowRotateLeft} /> DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN PLAZO DE 60 DÍAS </a>
                            </li>
                            <li>
                                <a> <FontAwesomeIcon icon={faMobileScreen} /> PAGA SEGURO APROVECHÁ HASTA 6 CUOTAS SIN INTERÉS </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>




        </>
    )
}



export default ItemDetail;