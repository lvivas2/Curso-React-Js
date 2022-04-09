import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import mockProducts from "../../Mock/Mock";
import { useParams } from "react-router-dom";




const ItemListContainer = (props) => {
    
        const {categoryId} = useParams ()
    
    const { titel } = props

    // Captura de los productos
    const [ListProducts, setListProducts] = useState([])


    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProducts)
            }, 2000)
        })
    }

    // Llamado asincronico
    useEffect(() => {
        setListProducts([])
        getProducts()
            .then((prod) => {
                
               categoryId ? filterCategory (prod, categoryId) : setListProducts(prod) 
                }) 
            

    }, [categoryId])

    const filterCategory =  (category, categoryId) => {
        return category.map ( (product) => {
            if (product.category === categoryId) {
                return setListProducts( ListProducts => [...ListProducts, product])
               
            }
                
            
            
        })
    }


    return (
        <>
            <div>
                <div className="item-img">
                    <h1 className="Titel-GYO">
                        {titel}
                    </h1>
                    <img src="/img/portadaDeportiva.png" className="" alt="..." />
                </div>
            </div>
            <div className="container-itemList">

            <ItemList   productos = {ListProducts } />

            
            </div>


          
        </>
    )
}

export default ItemListContainer;