import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    
  

        const mockDetail = [{
            id: 1,
            titel: "Sports Bra",
            waist: "s",
            price: 5400,
            stock: 2,
            image: "top.png",
            imageDos: "top1.png"
        }]
    
        const [detailProducts, setdetailProducts] = useState([])
    
        const detProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve(mockDetail)
                }, 2000)
            })
        }
    
    
        useEffect(() => {
            detProducts()
                .then((detail) => setdetailProducts(detail))
                .catch((err) => console.error(err))
    
        }, [])
    
    return (
        <>
        <ItemDetail details= {detailProducts}/>
        </>
    )
}

export default ItemDetailContainer;