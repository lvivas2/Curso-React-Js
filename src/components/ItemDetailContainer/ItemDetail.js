import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast, faArrowRotateLeft, faMobileScreen } from "@fortawesome/free-solid-svg-icons"

// Rutas









const ItemDetail = ({ details}) => {

   const { titel, waistS, waistM, waistXL, price, stock, image, imageTow, imageThree, id } = details



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
                                    <p className="detail-category">Mujer - Training</p>
                                    <h2>
                                        {titel}
                                    </h2>
                                    <p className="detail-price">${price}</p>
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

                                    <button type="button">Añadir al carrito <i className="bi bi-arrow-right"></i></button>


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