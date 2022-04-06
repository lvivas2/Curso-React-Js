import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import mockProducts from "../../Mock/Mock";
import { useParams } from "react-router-dom";




const ItemListContainer = (props) => {
    const { titel } = props
    
    const {id} = useParams ()
    console.log("useParams container: ", useParams())
    const [categoryByid, setCategoryByid] = useState ({})

    useEffect ( () => {
        filterCategory()
    }, [])

    const filterCategory =  () => {
        return mockProducts.map ( (category) => {
            if (category.categoryId == id) {
                setTimeout( () => {
                    return setCategoryByid(category)
                }, 2000)
            }
            console.log("category:", category )
        })
    }
    console.log("Categoria de productos: " , categoryByid)
    

    // // Captura de los productos
    // const [ListProducts, setListProducts] = useState([])


    // const getProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             return resolve(mockProducts)
    //         }, 2000)
    //     })
    // }

    // // Llamado asincronico
    // useEffect(() => {
    //     getProducts()
    //         .then((prod) => setListProducts(prod))
    //         .catch((err) => console.error(err))

    // }, []) //React Hook useEffect has missing dependency: "getProducts". Either include it or remove the dependency Array.

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

            <ItemList productos= {categoryByid } />
            </div>


          
        </>
    )
}

export default ItemListContainer;