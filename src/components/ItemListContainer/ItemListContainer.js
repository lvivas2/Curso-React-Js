import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";




const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const { titel } = props

    // Captura de los productos
    const [ListProducts, setListProducts] = useState([])


    const getProducts = async () => {
        const itemCollection = collection(db, "productos")
        const productSnapshot = await getDocs(itemCollection)
        console.log("productSnapshot: ", productSnapshot)
        const productList = productSnapshot.docs.map(
            (doc) =>{
                const product = doc.data()
                product.id = doc.id
                return product
        
            }
        )
        return productList
        
    }

    // Llamado asincronico
    useEffect(() => {
        setListProducts([])
        getProducts().then((prod) => {
            setLoading(false)
            categoryId ? filterCategory(prod, categoryId) : setListProducts(prod)
        })


    }, [categoryId])

    const filterCategory = (category, categoryId) => {
        return category.map((product) => {
            if (product.category === categoryId) {
                return setListProducts(ListProducts => [...ListProducts, product])

            }



        })
    }


    return (
        <>
            {/* <div>
                <div className="item-img">
                    <h1 className="Titel-GYO">
                        {titel}
                    </h1>
                    <img src="/img/portadaDeportiva.png" className="" alt="..." />
                </div>
            </div> */}


            

            {loading ? (
                <div>
                    <h2>Cargando productos...</h2>
                    <LinearProgress/>
                </div>
                
            ) : (
                
                <div className="container-itemList">
                  <ItemList productos={ListProducts} />
                </div>
            )}



        </>
    )
}

export default ItemListContainer;