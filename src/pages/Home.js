import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemListContainer/ItemList/ItemList";
import mockProducts from "../Mock/Mock";


const Home = ((props) => {
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
        getProducts()
            .then((prod) => setListProducts(prod))
            .catch((err) => console.error(err))

    }, []) //React Hook useEffect has missing dependency: "getProducts". Either include it or remove the dependency Array.
    console.log("monk de productos: ", ListProducts)

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

            <ItemList productos={ListProducts} />
               
            </div>

        </>
    )
})

export default Home;