import ItemCount from "../ItemListContainer/ItemCount";
import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast, faArrowRotateLeft, faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import CartContext from "../../Contex/CartContex";
import LinearProgress from '@mui/material/LinearProgress';

// Rutas





const ItemDetail = ({ details }) => {

    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)

    console.log("producto almacenado en el carrito: ", count)

    const { addProductToCart } = useContext(CartContext)


    const { titel, waistS, waistM, waistXL, price, stock, image, imageTow, imageThree, id, category } = details



    const onAdd = (add) => {
        setCount(add)
        addProductToCart({ ...details, quantity: add })
        console.log('new categori, cantidad, ', addProductToCart)

    }
    

    const cartUpdated = (() => {
        console.log("carrito actualizado: ", count)
    })


    setTimeout(()=>{
        setLoading(false)
    },2000)
    
    return (
        <>

{loading ? (
                <div>
                    <h2>Cargando productos...</h2>
                    <LinearProgress/>
                </div>
                
            ) : (


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


                        {

                            count === 0

                                ?



                                <div className="buttonCount-detail">
                                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                                </div>

                                :


                                <div className="button-ToCart">
                                    <Link to={"/Cart"}> <button onClick={cartUpdated} className="button-addCart" >Finalizar compra</button> </Link>
                                </div>
                        }


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
            </div>)}




        </>
    )
}



export default ItemDetail;