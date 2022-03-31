import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDroplet, faShirt, faArrowUpRightDots, faStarHalfStroke, faGem} from "@fortawesome/free-solid-svg-icons"





const ItemDetail = ({details = []}) => {

    return (
        <>
        {details.map((detail) => {   
                    const { titel, waist, price, stock, image, imageDos, id } = detail
                    console.log("detalle:", detail)
                    return (

                        <div className="detail-item" key={id}>
                            
                            <img src={`./${image}`} alt="..." />
                            <img src={`./${imageDos}`} alt="..." />
                            <div className="detail-product">
                            <h3>
                                {titel}
                            </h3>
                                <p>Precio: {price} - Talle: {waist} - Stock: {stock}</p> 
                                <p>Description<br/>This semi-full coverage bra provides support without sacrificing style.
                                </p>

                                <ul>
                                    <li><FontAwesomeIcon icon={faShirt}/>  75% Polyester 25% Spandex.</li>
                                    <li><FontAwesomeIcon icon={faGem}/>  Moderate Compression.</li>
                                    <li><FontAwesomeIcon icon={faStarHalfStroke}/>  Medium Coverage.</li>
                                    <li><FontAwesomeIcon icon={faArrowUpRightDots}/>  Medium Suppor.</li>
                                    <li><FontAwesomeIcon icon={faDroplet}/>  Sweat-wicking.</li>
                                </ul>
                               
                            </div>

                        </div>
                    )
                })}
        </>
    )
}



export default ItemDetail;