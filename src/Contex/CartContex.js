import  { createContext, useContext, useState } from "react";


const CartContext = createContext();


const CartProvider  =  ({children}) => {
   

    const [cartProducts, setCartproducts] = useState ([])
    
    console.log('lista de productos: ', cartProducts)
    
    
        
    const addProductToCart = (product) => {

        if( isInCart(product.id) ){

            const productRepeat = cartProducts.find((p) => p.id === product.id )
            const { cantidad } = productRepeat

            productRepeat.cantidad = product.cantidad + cantidad

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
 
    

    const  dataCart = {
        cartProducts,
        addProductToCart,
        deleteOne
       
    }


    return (

        <CartContext.Provider value={dataCart}>

            {children}

        </CartContext.Provider>

    )
    
    
} 

export {CartProvider}
export default CartContext