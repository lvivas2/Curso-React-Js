import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import db from "../../firebase";

const ItemDetailContainer = () => {
     const navigate = useNavigate()
    const { id } = useParams()

    const [object, setObject] = useState({})

    const getProduct = async () => {

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const product = docSnap.data()
            product.id = docSnap.id
            setObject(product)
          } else {
            console.log("No such document!");
            navigate("/error")
          }
    }


    useEffect(() => {
        getProduct()
     
    }, [])


    return (
        <>
            <ItemDetail details={object} />
        </>
    )
}

export default ItemDetailContainer;