import { createContext, useContext, useState } from "react";


const CartContext = createContext();


const CartProvider = ({ children }) => {


    const [cartProducts, setCartproducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])

    const [btnAdd, setBtnAdd] = useState(0)

    console.log("btnAdd: ", btnAdd)


    const addProductToCart = (product) => {

        if (isInCart(product.id)) {

            const productRepeat = cartProducts.find((p) => p.id === product.id)
            const { quantity } = productRepeat

            productRepeat.quantity = product.quantity + quantity

            const newProductCart = [...cartProducts]
            setCartproducts(newProductCart)

            // localStorage.setItem("Productos", cartProducts)

        } else {

            setCartproducts(cartProducts => [...cartProducts, product])
            localStorage.setItem("productos", JSON.stringify([...cartProducts, product]))
        }


    }

    const isInCart = (id) => {
        return cartProducts.some(details => details.id === id)
    }


    const deleteOne = (id) => {
        const newData = cartProducts.filter(p => p.id !== id)
        localStorage.setItem('productos', JSON.stringify(newData));
        setCartproducts(newData)
    }


    const returnProduct = () => { setBtnAdd(0) }

    const clear = () => { setCartproducts([]) || localStorage.removeItem("productos") }

    const clearAndStock = () => {
        returnProduct();
        clear()
    }


    const quantity = () => {
        return cartProducts.reduce((amass, product) => amass += product.quantity, 0)
    }

    const total = () => {
        return cartProducts.reduce((amass, product) => amass = amass + (product.price * product.quantity), 0)
    }




    const dataCart = {
        cartProducts,
        addProductToCart,
        deleteOne,
        clear,
        quantity,
        total,
        returnProduct,
        btnAdd,
        setBtnAdd,
        clearAndStock

    }


    return (

        <CartContext.Provider value={dataCart}>

            {children}

        </CartContext.Provider>

    )


}

export { CartProvider }
export default CartContext