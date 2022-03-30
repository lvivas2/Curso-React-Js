import React, {useEffect, useState} from "react";
import ItemList from "./ItemList/ItemList";




const ItemListContainer = (props) => {
    const { titel } = props

     // LLamado de ejemplo al servidor 
     const mockProducts = [{
        id: 1,
        titel: " Black Sweater",
        waist: "M",
        price: 12500,
        stock: 2,
        image: "sweater.png"
    },
    {
        id: 2,
        titel: "Wool Sweater",
        waist: "M",
        price: 2300,
        stock: 10,
        image: "wool.png"
    },
    {
        id: 3,
        titel: "Dress",
        waist: "S",
        price: 5600,
        stock: 13,
        image: "dress.png"
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
        getProducts()
        .then((prod) => setListProducts(prod))
        .catch((err) => console.error(err))

    }, []) //React Hook useEffect has missing dependency: "getProducts". Either include it or remove the dependency Array.

    return (
        <>
        <div>
            
            <div className="item-img">
            <h1 className="Titel-GYO">
                {titel}
            </h1>
                <img src="PortadaDos.png" className="" alt="..."/>
            </div>
        </div>
            <ItemList productos={ListProducts}/>
        </>
    )
}

export default ItemListContainer;