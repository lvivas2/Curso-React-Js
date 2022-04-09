import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import mockProducts from "../../Mock/Mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const {id} = useParams()

    const [object,setObject] = useState ({})

    useEffect( () => {
        filterProductById()
    }, [])

    const filterProductById = () => {
        return  mockProducts.map ( (product) => {
            if(product.id == id){
                setTimeout ( () => {
                    return setObject(product)
                }, 2000)
            }
        })
    }

  

    
    return (
        <>
        <ItemDetail details= {object}/>
        </>
    )
}

export default ItemDetailContainer;