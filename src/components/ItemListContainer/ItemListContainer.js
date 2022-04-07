import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import mockProducts from "../../Mock/Mock";
import { useParams } from "react-router-dom";




const ItemListContainer = (props) => {
    
        const {id} = useParams ()
    
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
                
               id ? filterCategory (prod, id) : setListProducts(prod) 
                }) 
            

    }, [id])

    const filterCategory =  (category, id) => {
        return category.map ( (product, i) => {
            if (product.categoryId === id) {
                return setListProducts( ListProducts => [...ListProducts, product])
               
            }
                
            
            
        })
    }
    console.log("Categoria de productos: " , ListProducts   )

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