import  { createContext, useContext, useState } from "react";


const CartContext = createContext();


const CartProvider  =  ({children}) => {
   

    const [cartProducts, setCartproducts] = useState ([])
    

    
    
        
    const addProductToCart = (product) => {

        if( isInCart(product.id) ){

            const productRepeat = cartProducts.find((p) => p.id === product.id )
            const { quantity } = productRepeat

            productRepeat.quantity = product.quantity + quantity

            const newProductCart = [...cartProducts]
            setCartproducts(newProductCart)
        }else{

            setCartproducts(cartProducts => [...cartProducts, product])
            
        }
        

    }

    const isInCart = (id) => {
        return  cartProducts.some( details => details.id === id )
        
        
    }


    const deleteOne = (id) => {
        setCartproducts(cartProducts.filter(p => p.id !== id))
    }

    const clear = () => {setCartproducts([])}
        


    const quantity = () => {
        return cartProducts.reduce((amass, product) => amass += product.quantity, 0)
    } 

    const total = () => {
        return cartProducts.reduce((amass, product) => amass = amass + (product.price * product.quantity), 0) 
    }


    const  dataCart = {
        cartProducts,
        addProductToCart,
        deleteOne,
        clear,
        quantity,
        total
    }


    return (

        <CartContext.Provider value={dataCart}>

            {children}

        </CartContext.Provider>

    )
    
    
} 

export {CartProvider}
export default CartContext