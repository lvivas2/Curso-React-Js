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

            <ItemList  category = {categoryByid } />
            </div>


          
        </>
    )
}

export default ItemListContainer;