import React, {useEffect, useState} from "react";
import ItemList from "./ItemList/ItemList";
import ItemCard from "./ItemCard/ItemCard";



const ItemListContainer = (props) => {
    const { titel } = props

     // LLamado de ejemplo al servidor 
     const mockProducts = [{
        id: 1,
        titel: "Campera",
        waist: "M",
        price: 12500,
        stock: 2
    },
    {
        id: 2,
        titel: "Musculosa",
        waist: "S",
        price: 2300,
        stock: 10
    }]

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
        getProducts().then((prod) => {
            setListProducts(prod)
        })
    }, [])

    return (
        <>
        <div>
            <h1 className="Titel-GYO">
                {titel}
            </h1>
        <ItemList/>
        </div>

         {/* {ListProducts.map((ListProduct) => {
                const {id} = ListProduct
                return (

                    <ItemCard data={ListProduct} key={id} />
                  
                )
            })} */}

            <ItemList productos={ListProducts} />
        </>
    )
}

export default ItemListContainer;